import { parseSSEStream } from "./sse.js";
import type { AgentMetadata, AgentResponseEvent, AgentRunInput } from "./types.js";

const ENV_TOKEN = "TFY_API_KEY";

export interface AgentClientOptions {
    /** Base URL including tenant (e.g. "https://host/api/llm/truefoundry"). */
    baseUrl: string;
    /** API key for Bearer auth. Falls back to the TFY_API_KEY environment variable. */
    apiKey?: string;
    /** Default metadata headers sent with every request (e.g. TFY_ALPHA_ENABLE_PLANNING). */
    metadata?: AgentMetadata;
    /** Default timeout in seconds. */
    timeoutInSeconds?: number;
    /** Provide a custom fetch implementation. */
    fetch?: typeof fetch;
}

export interface StreamOptions {
    /** Abort signal to cancel the request. */
    signal?: AbortSignal;
    /** Per-request metadata merged on top of client-level defaults. */
    metadata?: AgentMetadata;
}

export class AgentClient {
    private readonly baseUrl: string;
    private readonly apiKey: string | undefined;
    private readonly defaultMetadata: AgentMetadata;
    private readonly timeoutMs: number | undefined;
    private readonly fetchFn: typeof fetch | undefined;

    constructor(options: AgentClientOptions) {
        this.baseUrl = options.baseUrl.replace(/\/+$/, "");
        this.apiKey = options.apiKey;
        this.defaultMetadata = options.metadata ?? {};
        this.timeoutMs = options.timeoutInSeconds ? options.timeoutInSeconds * 1000 : undefined;
        this.fetchFn = options.fetch;
    }

    private resolveApiKey(): string {
        const key = this.apiKey ?? (typeof process !== "undefined" ? process.env?.[ENV_TOKEN] : undefined);
        if (!key) {
            throw new AgentClientError(
                `No API key provided. Pass apiKey in AgentClientOptions or set the ${ENV_TOKEN} environment variable.`,
                0,
            );
        }
        return key;
    }

    /**
     * Send an agent run request and stream back response events via SSE.
     *
     * @param input - Either a NamedAgentRunInput (agent_name) or InlineAgentRunInput (model + config).
     * @param options - Optional abort signal and per-request metadata overrides.
     * @returns An async generator yielding AgentResponseEvent objects as they arrive.
     */
    async *stream(input: AgentRunInput, options?: StreamOptions): AsyncGenerator<AgentResponseEvent> {
        const apiKey = this.resolveApiKey();
        const metadata = { ...this.defaultMetadata, ...options?.metadata };

        const headers: Record<string, string> = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        };

        if (Object.keys(metadata).length > 0) {
            headers["x-tfy-metadata"] = JSON.stringify(metadata);
        }

        const fetchFn = this.fetchFn ?? globalThis.fetch;

        let signal = options?.signal;
        let timeoutId: ReturnType<typeof setTimeout> | undefined;
        if (!signal && this.timeoutMs) {
            const controller = new AbortController();
            signal = controller.signal;
            timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
        }

        try {
            const response = await fetchFn(`${this.baseUrl}/agent/responses`, {
                method: "POST",
                headers,
                body: JSON.stringify(input),
                signal,
            });

            if (!response.ok) {
                const body = await response.text().catch(() => "");
                throw new AgentClientError(
                    `Agent API returned ${response.status}: ${body}`,
                    response.status,
                    body,
                );
            }

            if (!response.body) {
                throw new AgentClientError("Response body is empty", response.status);
            }

            yield* parseSSEStream<AgentResponseEvent>(response.body);
        } finally {
            if (timeoutId !== undefined) {
                clearTimeout(timeoutId);
            }
        }
    }
}

export class AgentClientError extends Error {
    public readonly status: number;
    public readonly responseBody?: string;

    constructor(message: string, status: number, responseBody?: string) {
        super(message);
        this.name = "AgentClientError";
        this.status = status;
        this.responseBody = responseBody;
    }
}
