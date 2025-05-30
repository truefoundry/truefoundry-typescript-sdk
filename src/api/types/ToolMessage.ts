/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * Tool message for the chat
 */
export interface ToolMessage {
    /** Role of the message */
    role: "tool";
    /** Content of the tool call result */
    content: TrueFoundry.ToolMessageContent;
    /** Unique identifier for the tool call */
    tool_call_id: string;
}
