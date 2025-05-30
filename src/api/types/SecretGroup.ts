/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

export interface SecretGroup {
    id?: string;
    fqn?: string;
    name: string;
    tenantName: string;
    createdBySubject: TrueFoundry.Subject;
    associatedSecrets: TrueFoundry.Secret[];
    integrationId?: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
}
