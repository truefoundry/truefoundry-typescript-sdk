/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

export interface Model {
    id: string;
    ml_repo_id: string;
    type?: "model";
    name: string;
    fqn: string;
    created_by_subject: TrueFoundry.Subject;
    created_at?: string;
    updated_at?: string;
    latest_version?: TrueFoundry.ModelVersion;
    run_steps?: number[];
}
