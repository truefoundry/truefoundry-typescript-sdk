import { AgentClient, AgentClientError } from "../../../src/agent/AgentClient";

function createMockFetch(status: number, body: string, headers?: Record<string, string>) {
    const encoder = new TextEncoder();
    return vi.fn().mockResolvedValue(
        new Response(
            new ReadableStream({
                start(controller) {
                    controller.enqueue(encoder.encode(body));
                    controller.close();
                },
            }),
            { status, headers },
        ),
    );
}

function createSSEBody(events: object[]): string {
    return events.map((e) => `data: ${JSON.stringify(e)}\n\n`).join("");
}

describe("AgentClient", () => {
    describe("constructor", () => {
        it("should strip trailing slashes from baseUrl", () => {
            const client = new AgentClient({ baseUrl: "https://host/api/llm/tenant///", apiKey: "key" });
            // Verify by making a request and checking the URL
            const mockFetch = createMockFetch(200, createSSEBody([{ type: "agent.done" }]));
            const clientWithFetch = new AgentClient({
                baseUrl: "https://host/api/llm/tenant///",
                apiKey: "key",
                fetch: mockFetch,
            });

            // Consume the stream to trigger the fetch
            (async () => {
                for await (const _ of clientWithFetch.stream({ agent_name: "test", input: [] })) {
                    // consume
                }
            })().then(() => {
                expect(mockFetch).toHaveBeenCalledWith(
                    "https://host/api/llm/tenant/agent/responses",
                    expect.anything(),
                );
            });
        });
    });

    describe("stream", () => {
        it("should send correct request headers and body", async () => {
            const mockFetch = createMockFetch(200, createSSEBody([{ type: "agent.done" }]));

            const client = new AgentClient({
                baseUrl: "https://host/api/llm/tenant",
                apiKey: "test-key",
                metadata: { TFY_ALPHA_ENABLE_PLANNING: "true" },
                fetch: mockFetch,
            });

            for await (const _ of client.stream({ agent_name: "my-agent", input: [] })) {
                // consume
            }

            expect(mockFetch).toHaveBeenCalledWith(
                "https://host/api/llm/tenant/agent/responses",
                expect.objectContaining({
                    method: "POST",
                    body: JSON.stringify({ agent_name: "my-agent", input: [] }),
                }),
            );

            const callArgs = mockFetch.mock.calls[0][1];
            expect(callArgs.headers["Authorization"]).toBe("Bearer test-key");
            expect(callArgs.headers["Content-Type"]).toBe("application/json");
            expect(JSON.parse(callArgs.headers["x-tfy-metadata"])).toEqual({
                TFY_ALPHA_ENABLE_PLANNING: "true",
            });
        });

        it("should not send x-tfy-metadata when metadata is empty", async () => {
            const mockFetch = createMockFetch(200, createSSEBody([{ type: "agent.done" }]));

            const client = new AgentClient({
                baseUrl: "https://host/api/llm/tenant",
                apiKey: "key",
                fetch: mockFetch,
            });

            for await (const _ of client.stream({ agent_name: "test", input: [] })) {
                // consume
            }

            const callArgs = mockFetch.mock.calls[0][1];
            expect(callArgs.headers["x-tfy-metadata"]).toBeUndefined();
        });

        it("should yield parsed SSE events", async () => {
            const sseEvents = [
                { type: "response.created", responseId: "abc" },
                { type: "agent.message", content: "hello", role: "assistant" },
                { type: "agent.done", executionId: "exec-1" },
            ];
            const mockFetch = createMockFetch(200, createSSEBody(sseEvents));

            const client = new AgentClient({
                baseUrl: "https://host/api/llm/tenant",
                apiKey: "key",
                fetch: mockFetch,
            });

            const received: object[] = [];
            for await (const event of client.stream({ agent_name: "test", input: [] })) {
                received.push(event);
            }

            expect(received).toEqual(sseEvents);
        });

        it("should throw AgentClientError on non-200 response", async () => {
            const mockFetch = vi.fn().mockResolvedValue(
                new Response('{"error":"unauthorized"}', { status: 401 }),
            );

            const client = new AgentClient({
                baseUrl: "https://host/api/llm/tenant",
                apiKey: "bad-key",
                fetch: mockFetch,
            });

            let caught: unknown;
            try {
                for await (const _ of client.stream({ agent_name: "test", input: [] })) {
                    // consume
                }
            } catch (err) {
                caught = err;
            }

            expect(caught).toBeInstanceOf(AgentClientError);
            expect((caught as AgentClientError).status).toBe(401);
            expect((caught as AgentClientError).responseBody).toBe('{"error":"unauthorized"}');
        });

        it("should throw AgentClientError when response body is null", async () => {
            const mockFetch = vi.fn().mockResolvedValue(
                new Response(null, { status: 200 }),
            );

            const client = new AgentClient({
                baseUrl: "https://host/api/llm/tenant",
                apiKey: "key",
                fetch: mockFetch,
            });

            await expect(async () => {
                for await (const _ of client.stream({ agent_name: "test", input: [] })) {
                    // consume
                }
            }).rejects.toThrow("Response body is empty");
        });

        it("should merge per-request metadata with defaults", async () => {
            const mockFetch = createMockFetch(200, createSSEBody([{ type: "agent.done" }]));

            const client = new AgentClient({
                baseUrl: "https://host/api/llm/tenant",
                apiKey: "key",
                metadata: { key1: "default" },
                fetch: mockFetch,
            });

            for await (const _ of client.stream(
                { agent_name: "test", input: [] },
                { metadata: { key2: "override" } },
            )) {
                // consume
            }

            const callArgs = mockFetch.mock.calls[0][1];
            expect(JSON.parse(callArgs.headers["x-tfy-metadata"])).toEqual({
                key1: "default",
                key2: "override",
            });
        });

        it("should pass abort signal to fetch", async () => {
            const mockFetch = createMockFetch(200, createSSEBody([{ type: "agent.done" }]));

            const client = new AgentClient({
                baseUrl: "https://host/api/llm/tenant",
                apiKey: "key",
                fetch: mockFetch,
            });

            const controller = new AbortController();
            for await (const _ of client.stream(
                { agent_name: "test", input: [] },
                { signal: controller.signal },
            )) {
                // consume
            }

            const callArgs = mockFetch.mock.calls[0][1];
            expect(callArgs.signal).toBe(controller.signal);
        });
    });

    describe("resolveApiKey", () => {
        it("should throw when no apiKey and no env var", async () => {
            const originalEnv = process.env.TFY_API_KEY;
            delete process.env.TFY_API_KEY;

            const client = new AgentClient({
                baseUrl: "https://host/api/llm/tenant",
                fetch: vi.fn(),
            });

            await expect(async () => {
                for await (const _ of client.stream({ agent_name: "test", input: [] })) {
                    // consume
                }
            }).rejects.toThrow("No API key provided");

            process.env.TFY_API_KEY = originalEnv;
        });

        it("should fall back to TFY_API_KEY env var", async () => {
            const originalEnv = process.env.TFY_API_KEY;
            process.env.TFY_API_KEY = "env-key";

            const mockFetch = createMockFetch(200, createSSEBody([{ type: "agent.done" }]));

            const client = new AgentClient({
                baseUrl: "https://host/api/llm/tenant",
                fetch: mockFetch,
            });

            for await (const _ of client.stream({ agent_name: "test", input: [] })) {
                // consume
            }

            const callArgs = mockFetch.mock.calls[0][1];
            expect(callArgs.headers["Authorization"]).toBe("Bearer env-key");

            process.env.TFY_API_KEY = originalEnv;
        });
    });
});
