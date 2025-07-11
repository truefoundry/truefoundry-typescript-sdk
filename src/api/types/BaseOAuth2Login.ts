/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * +label=OAuth2 Client Configuration
 * +usage=OAuth2 client configuration to get the JWT.
 */
export interface BaseOAuth2Login {
    /**
     * +label=Client ID
     * +usage=client ID for OAuth2.
     * +sort=200
     */
    client_id: string;
    /**
     * +label=Client Secret
     * +usage=Client secret or the TrueFoundry secret containing the client secret for OAuth2.
     * +sort=300
     */
    client_secret?: string;
    /**
     * +label=Authorization URL
     * +usage=URL for the authorization request
     * +sort=400
     */
    authorization_url: string;
    /**
     * +label=Token URL
     * +usage=The endpoint to exchange auth code for tokens.
     * +sort=500
     */
    token_url: string;
    /**
     * +label=Scopes
     * +usage=List of scopes to request from the OAuth2 provider.
     * +sort=600
     */
    scopes: string[];
    /**
     * +label=JWT Source
     * +usage=Source of the JWT token to be used for verification.
     * +sort=700
     */
    jwt_source: TrueFoundry.BaseOAuth2LoginJwtSource;
}
