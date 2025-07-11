/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PolicyEntityTypes = "service" | "async-service" | "job" | "notebook" | "ssh-server" | "workflow" | "helm";
export const PolicyEntityTypes = {
    Service: "service",
    AsyncService: "async-service",
    Job: "job",
    Notebook: "notebook",
    SshServer: "ssh-server",
    Workflow: "workflow",
    Helm: "helm",
} as const;
