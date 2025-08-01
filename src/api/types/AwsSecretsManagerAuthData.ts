/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * +label=Auth Data
 * +usage=Custom authentication data for the integration.
 * +sort=300
 */
export type AwsSecretsManagerAuthData = TrueFoundry.AwsAccessKeyBasedAuth | TrueFoundry.AwsAssumedRoleBasedAuth;
