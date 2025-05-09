/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

export interface User {
    id: string;
    email: string;
    userName: string;
    tenantName: string;
    metadata: TrueFoundry.UserMetadata;
    roles?: string[];
    active: boolean;
    createdAt: string;
    updatedAt: string;
}
