/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * Text content for the message
 */
export interface TextContentPart {
    /** Type of the content part */
    type: "text";
    /** Text content for the message */
    text: TrueFoundry.TextContentPartText;
}
