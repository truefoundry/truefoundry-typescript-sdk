/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * +label=Cohere API Key Auth
 * +icon=cohere
 */
export interface CohereKeyAuth {
    /** +value=api-key */
    type: "api-key";
    /**
     * +label=API Key
     * +sort=100
     * +usage=The API key for Cohere authentication
     * +message=API key must not be empty
     * +uiType=Password
     */
    api_key: string;
}
