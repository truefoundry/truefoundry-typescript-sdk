/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

export interface GetAlertsResponse {
    /** Object containing alert data grouped by alert name */
    data: Record<string, TrueFoundry.Alert[]>;
}
