/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

export interface ModelVersion {
    id: string;
    fqn: string;
    created_by_subject: TrueFoundry.Subject;
    created_at?: string;
    updated_at?: string;
    manifest: TrueFoundry.ModelManifest;
    usage_code_snippet?: string;
    ml_repo_id: string;
    model_id: string;
    metrics?: TrueFoundry.Metric[];
    deployable?: boolean;
}
