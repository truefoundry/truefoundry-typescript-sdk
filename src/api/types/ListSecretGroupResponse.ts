/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

export interface ListSecretGroupResponse {
    /** Array of Secret Groups */
    data: TrueFoundry.SecretGroup[];
    /** Pagination information */
    pagination: TrueFoundry.Pagination;
}
