/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * +label=AI21
 * +icon=ai21
 */
export interface Ai21ProviderAccount {
    /** +value=provider-account/ai21 */
    type: "provider-account/ai21";
    /**
     * +label=Name
     * +sort=100
     * +usage=The name of the AI21 provider account
     * +message=3 to 32 lower case characters long alphanumeric word, may contain - in between, cannot start with a number
     * +uiProps={"disableEdit":true}
     */
    name: string;
    auth_data: TrueFoundry.Ai21KeyAuth;
    /**
     * +label=Integrations
     * +sort=400
     * +usage=List of integrations that are associated with the AI21 provider account
     * +uiType=IntegrationsGroup
     */
    integrations?: TrueFoundry.Ai21Integrations[];
    /**
     * +label=Collaborators
     * +sort=200
     * +usage=List of users who have access to this provider account
     * +uiType=Collaborators
     */
    collaborators?: TrueFoundry.Collaborator[];
}
