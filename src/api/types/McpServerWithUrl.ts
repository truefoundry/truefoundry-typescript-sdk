/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * MCP server with URL
 */
export interface McpServerWithUrl {
    /** The URL of the MCP server */
    type: "mcp-server-url";
    /** The URL of the MCP server */
    url: string;
    /** The headers to send to the MCP server */
    headers?: Record<string, string>;
    /** Whether to enable all tools from the MCP server */
    enable_all_tools?: boolean;
    /** The tools to enable from the MCP server */
    tools?: TrueFoundry.McpTool[];
}
