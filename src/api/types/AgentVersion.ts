/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

export interface AgentVersion {
    id: string;
    fqn: string;
    created_by_subject: TrueFoundry.Subject;
    created_at?: string;
    updated_at?: string;
    manifest: TrueFoundry.AgentManifest;
    usage_code_snippet?: string;
    ml_repo_id: string;
    agent_id: string;
}
