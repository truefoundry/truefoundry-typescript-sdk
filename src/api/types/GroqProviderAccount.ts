/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * +label=Groq Provider Account
 * +icon=groq
 */
export interface GroqProviderAccount {
    /** +value=provider-account/groq */
    type: "provider-account/groq";
    /**
     * +label=Name
     * +sort=100
     * +usage=The name of the Groq provider account
     * +message=3 to 32 lower case characters long alphanumeric word, may contain - in between, cannot start with a number
     * +uiProps={"disableEdit":true}
     */
    name: string;
    auth_data: TrueFoundry.GroqKeyAuth;
    /**
     * +label=Integrations
     * +sort=300
     * +usage=List of integrations that are associated with the Groq provider account
     * +uiType=IntegrationsGroup
     */
    integrations?: TrueFoundry.GroqIntegrations[];
    /**
     * +label=Collaborators
     * +sort=400
     * +usage=List of users who have access to this provider account
     * +uiType=Collaborators
     */
    collaborators?: TrueFoundry.Collaborator[];
}
