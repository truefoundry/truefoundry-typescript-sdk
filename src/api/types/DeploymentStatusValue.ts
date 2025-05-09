/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type DeploymentStatusValue =
    | "INITIALIZED"
    | "BUILD_SUCCESS"
    | "BUILD_FAILED"
    | "DEPLOY_FAILED"
    | "DEPLOY_FAILED_WITH_RETRY"
    | "DEPLOY_SUCCESS"
    | "ROLLOUT_STARTED"
    | "SET_TRAFFIC"
    | "PAUSED"
    | "FAILED"
    | "CANCELLED"
    | "REDEPLOY_STARTED"
    | "BUILDING";
export const DeploymentStatusValue = {
    Initialized: "INITIALIZED",
    BuildSuccess: "BUILD_SUCCESS",
    BuildFailed: "BUILD_FAILED",
    DeployFailed: "DEPLOY_FAILED",
    DeployFailedWithRetry: "DEPLOY_FAILED_WITH_RETRY",
    DeploySuccess: "DEPLOY_SUCCESS",
    RolloutStarted: "ROLLOUT_STARTED",
    SetTraffic: "SET_TRAFFIC",
    Paused: "PAUSED",
    Failed: "FAILED",
    Cancelled: "CANCELLED",
    RedeployStarted: "REDEPLOY_STARTED",
    Building: "BUILDING",
} as const;
