/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

export interface ListPersonalAccessTokenResponse {
    /** Array of Personal Access Tokens */
    data: TrueFoundry.VirtualAccount[];
    /** Pagination Information */
    pagination: TrueFoundry.Pagination;
}
