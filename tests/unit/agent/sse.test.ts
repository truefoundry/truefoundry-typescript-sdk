import { parseSSEStream } from "../../../src/agent/sse";

function createSSEStream(chunks: string[]): ReadableStream<Uint8Array> {
    const encoder = new TextEncoder();
    return new ReadableStream({
        start(controller) {
            for (const chunk of chunks) {
                controller.enqueue(encoder.encode(chunk));
            }
            controller.close();
        },
    });
}

async function collectEvents<T>(stream: ReadableStream): Promise<T[]> {
    const events: T[] = [];
    for await (const event of parseSSEStream<T>(stream)) {
        events.push(event);
    }
    return events;
}

describe("parseSSEStream", () => {
    it("should parse single SSE event", async () => {
        const stream = createSSEStream(['data: {"type":"agent.done"}\n\n']);
        const events = await collectEvents(stream);
        expect(events).toEqual([{ type: "agent.done" }]);
    });

    it("should parse multiple SSE events", async () => {
        const stream = createSSEStream([
            'data: {"type":"response.created","responseId":"abc"}\n\n',
            'data: {"type":"agent.message","content":"hello"}\n\n',
            'data: {"type":"agent.done"}\n\n',
        ]);
        const events = await collectEvents(stream);
        expect(events).toHaveLength(3);
        expect(events[0]).toEqual({ type: "response.created", responseId: "abc" });
        expect(events[1]).toEqual({ type: "agent.message", content: "hello" });
        expect(events[2]).toEqual({ type: "agent.done" });
    });

    it("should handle events split across chunks", async () => {
        const stream = createSSEStream([
            'data: {"type":"age',
            'nt.done"}\n\n',
        ]);
        const events = await collectEvents(stream);
        expect(events).toEqual([{ type: "agent.done" }]);
    });

    it("should handle multiple events in a single chunk", async () => {
        const stream = createSSEStream([
            'data: {"a":1}\n\ndata: {"b":2}\n\n',
        ]);
        const events = await collectEvents(stream);
        expect(events).toEqual([{ a: 1 }, { b: 2 }]);
    });

    it("should skip empty data lines", async () => {
        const stream = createSSEStream(["data: \n\n", 'data: {"type":"ok"}\n\n']);
        const events = await collectEvents(stream);
        expect(events).toEqual([{ type: "ok" }]);
    });

    it("should skip non-data lines (comments, event, id)", async () => {
        const stream = createSSEStream([
            ": this is a comment\n",
            "event: message\n",
            "id: 123\n",
            'data: {"type":"ok"}\n\n',
        ]);
        const events = await collectEvents(stream);
        expect(events).toEqual([{ type: "ok" }]);
    });

    it("should skip malformed JSON without crashing", async () => {
        const stream = createSSEStream([
            "data: not-json\n\n",
            'data: {"type":"ok"}\n\n',
        ]);
        const events = await collectEvents(stream);
        expect(events).toEqual([{ type: "ok" }]);
    });

    it("should handle empty stream", async () => {
        const stream = createSSEStream([]);
        const events = await collectEvents(stream);
        expect(events).toEqual([]);
    });

    it("should handle trailing data without newline", async () => {
        const stream = createSSEStream(['data: {"trailing":true}']);
        const events = await collectEvents(stream);
        expect(events).toEqual([{ trailing: true }]);
    });
});
