/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

export interface ListApplicationDeploymentsResponse {
    /** Array of Deployments */
    data: TrueFoundry.Deployment[];
    /** Pagination information */
    pagination: TrueFoundry.Pagination;
}
