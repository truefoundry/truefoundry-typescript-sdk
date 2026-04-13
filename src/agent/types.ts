/**
 * Self-contained type definitions for the TrueFoundry Agent API.
 *
 * These describe the JSON wire format only — no external dependencies (openai, zod, etc.).
 * Kept in sync with tfy-llm-gateway/src/agent/Types.ts and schemas.ts.
 */

// ---------------------------------------------------------------------------
// Request types
// ---------------------------------------------------------------------------

export interface ModelParams {
    max_tokens?: number;
    temperature?: number;
    top_p?: number;
    top_k?: number;
    parallel_tool_calls?: boolean;
    reasoning_effort?: "none" | "minimal" | "low" | "medium" | "high";
    [key: string]: unknown;
}

export interface MCPToolSettings {
    name: string;
    eager?: true;
}

export interface MCPServerRequest {
    name: string;
    headers?: Record<string, string>;
    enable_all_tools?: boolean;
    tools?: MCPToolSettings[];
    deferred?: boolean;
}

export interface SubAgentRequest {
    name: string;
}

export interface UserMessageInput {
    role: "user";
    content: string;
}

export interface SandboxConfig {
    enabled: boolean;
}

interface BaseAgentRunInput {
    input?: unknown[];
    previous_response_id?: string;
    store?: boolean;
    variables?: Record<string, string>;
}

export interface NamedAgentRunInput extends BaseAgentRunInput {
    agent_name: string;
}

export interface InlineAgentRunInput extends BaseAgentRunInput {
    model: string;
    instruction?: string;
    messages?: UserMessageInput[];
    mcp_servers?: MCPServerRequest[];
    sub_agents?: SubAgentRequest[];
    model_params?: ModelParams;
    response_format?: unknown;
    iteration_limit?: number;
    sandbox?: SandboxConfig;
}

export type AgentRunInput = NamedAgentRunInput | InlineAgentRunInput;

export function isNamedAgentRunInput(input: AgentRunInput): input is NamedAgentRunInput {
    return "agent_name" in input && typeof (input as NamedAgentRunInput).agent_name === "string";
}

export function isInlineAgentRunInput(input: AgentRunInput): input is InlineAgentRunInput {
    return "model" in input;
}

// ---------------------------------------------------------------------------
// Shared / nested types used by response events
// ---------------------------------------------------------------------------

export type FinishReason = "stop" | "length" | "tool_calls" | "content_filter" | "function_call" | null;

export interface AgentParent {
    toolCallId: string;
    executionId: string;
}

export interface AgentInfo {
    type: "agent-defined";
    name: string;
    input: string;
}

export interface CompletionUsage {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
}

export interface MCPToolCallInfo {
    mcp_server_id: string;
    mcp_server_name: string;
    original_tool_name: string;
}

export interface ToolCallFunction {
    name?: string;
    arguments?: string;
    thought_signature?: string;
    tool_info?: MCPToolCallInfo;
}

export interface ToolCallDelta {
    index: number;
    id?: string;
    type?: "function";
    function?: ToolCallFunction;
    provider_specific_fields?: { thought_signature?: string };
}

export interface ThinkingBlock {
    type: "thinking";
    thinking: string;
    signature?: string;
}

export interface RedactedThinkingBlock {
    type: "redacted_thinking";
    data: string;
}

export interface ExtendedToolCallFunction {
    name: string;
    arguments: string;
    thought_signature?: string;
    tool_info?: MCPToolCallInfo;
}

export interface ExtendedToolCall {
    id: string;
    type: "function";
    function: ExtendedToolCallFunction;
    provider_specific_fields?: { thought_signature?: string };
}

export interface MCPOAuthLoginUrl {
    mcp_server_id: string;
    mcp_server_name: string;
    url: string;
}

export interface MCPInitializationInfo {
    mcp_server_id: string;
    mcp_server_name: string;
    sessionId?: string;
}

// ---------------------------------------------------------------------------
// Response event types — each has a unique `type` discriminator
// ---------------------------------------------------------------------------

export interface ResponseCreated {
    type: "response.created";
    responseId: string;
    createdAt: string;
}

export interface ResponseError {
    type: "response.error";
    message: string;
}

export interface AgentExecutionCreated {
    type: "agent.created";
    executionId: string;
    parent: AgentParent;
    agentInfo: AgentInfo;
    createdAt?: string;
}

export interface AgentExecutionDone {
    type: "agent.done";
    executionId: string;
    output: AgentAssistantMessage;
    parent: AgentParent | undefined;
}

export interface AgentExecutionError {
    type: "agent.error";
    executionId: string;
    parent: AgentParent | undefined;
    message: string;
    output?: AgentAssistantMessage;
}

/**
 * Streaming delta for assistant LLM messages.
 * Shares `type: "agent.message"` with tool responses — distinguished by `role`.
 */
export interface AgentLLMMessageDelta {
    type: "agent.message";
    executionId: string;
    role?: "assistant";
    content?: string | null;
    tool_calls?: ToolCallDelta[];
    thinking_blocks?: Array<ThinkingBlock | RedactedThinkingBlock>;
    reasoning_content?: string;
    createdAt?: string;
    finishReason?: FinishReason;
}

/** Tool execution result streamed back. */
export interface AgentToolResponseDelta {
    type: "agent.message";
    executionId: string;
    role: "tool";
    content: string;
    tool_call_id: string;
}

/** Completed assistant message (used in `agent.done` output). */
export interface AgentAssistantMessage {
    type: "agent.message";
    executionId: string;
    role: "assistant";
    content?: string | null;
    tool_calls?: ExtendedToolCall[];
    thinking_blocks?: Array<ThinkingBlock | RedactedThinkingBlock>;
    finishReason: FinishReason;
    createdAt?: number;
}

export interface AgentMCPAuthRequired {
    type: "mcp.auth_required";
    executionId: string;
    oauth_login_urls: MCPOAuthLoginUrl[];
}

export interface AgentMCPInitialize {
    type: "mcp.initialize";
    executionId: string;
    content: MCPInitializationInfo[];
}

export interface AgentSandboxCreated {
    type: "sandbox.created";
    executionId: string;
    sandboxId: string;
}

export interface AgentExecutionOverwriteContext {
    type: "agent.context.overwrite";
    executionId: string;
    reason: "compaction";
    context: unknown[];
    currentContextUsage: CompletionUsage;
}

// ---------------------------------------------------------------------------
// Union of all SSE events the client may receive
// ---------------------------------------------------------------------------

export type AgentResponseEvent =
    | AgentLLMMessageDelta
    | AgentToolResponseDelta
    | AgentExecutionError
    | AgentExecutionDone
    | AgentExecutionCreated
    | AgentMCPAuthRequired
    | AgentMCPInitialize
    | AgentSandboxCreated
    | AgentExecutionOverwriteContext
    | ResponseCreated
    | ResponseError;

export type AgentMetadata = Record<string, string>;
