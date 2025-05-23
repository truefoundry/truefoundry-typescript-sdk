/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface HeaderMatch {
    /** +value=header */
    type: "header";
    /**
     * +docs=Header name to match on
     * +label=Name
     */
    name: string;
    /**
     * +docs=Header value to match on
     * +label=Value
     */
    exact_match: string;
}
