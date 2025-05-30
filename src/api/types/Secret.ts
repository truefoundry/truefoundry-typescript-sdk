/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

export interface Secret {
    id: string;
    fqn: string;
    name: string;
    secretGroupId: string;
    value?: string;
    createdBySubject?: TrueFoundry.Subject;
    createdAt?: string;
    updatedAt?: string;
    secretVersions?: TrueFoundry.SecretVersion[];
    activeDeploymentsCount?: number;
    createdBy?: string;
}
