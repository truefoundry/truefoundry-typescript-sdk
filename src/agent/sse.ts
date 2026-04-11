/**
 * Minimal SSE parser — zero external dependencies.
 *
 * Consumes a ReadableStream<Uint8Array> (from fetch response.body) and yields
 * parsed JSON objects from `data:` lines. The server writes each event as:
 *
 *   data: <JSON>\n\n
 */
export async function* parseSSEStream<T = unknown>(stream: ReadableStream): AsyncGenerator<T> {
    const decoder = new TextDecoder();
    const reader = stream.getReader();
    let buffer = "";

    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += typeof value === "string" ? value : decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop()!;

            for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed || !trimmed.startsWith("data:")) continue;

                const jsonStr = trimmed.slice("data:".length).trim();
                if (!jsonStr) continue;

                try {
                    yield JSON.parse(jsonStr) as T;
                } catch {
                    // Skip malformed JSON payloads.
                }
            }
        }

        if (buffer.trim().startsWith("data:")) {
            const jsonStr = buffer.trim().slice("data:".length).trim();
            if (jsonStr) {
                try {
                    yield JSON.parse(jsonStr) as T;
                } catch {
                    // ignore
                }
            }
        }
    } finally {
        await reader.cancel();
        reader.releaseLock();
    }
}
