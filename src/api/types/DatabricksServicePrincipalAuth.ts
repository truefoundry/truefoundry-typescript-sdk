/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * +label=Databricks Service Principal Auth
 * +usage=You can authenticate using Databricks service principal. To generate OAuth secret and Client ID, go to Databricks workspace -> Workspace Settings -> Identity and Access -> Service Principals -> Secrets.
 */
export interface DatabricksServicePrincipalAuth {
    /** +value=service-principal */
    type: "service-principal";
    /**
     * +label=OAuth Secret
     * +usage=OAuth secret of the Databricks service principal.
     * +sort=200
     * +uiType=Password
     */
    oauth_secret: string;
    /**
     * +label=Client ID
     * +usage=Client ID or Application ID of the Databricks service principal.
     * +sort=100
     * +uiType=Password
     */
    client_id: string;
}
