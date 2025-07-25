/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * +label=Auth Data
 * +sort=300
 * +usage=Databricks authentication credentials
 */
export type DatabricksProviderAccountAuthData =
    | TrueFoundry.DatabricksServicePrincipalAuth
    | TrueFoundry.DatabricksApiKeyAuth;
