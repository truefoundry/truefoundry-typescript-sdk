/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Status of JobRun
 */
export type JobRunStatus =
    | "CREATED"
    | "SCHEDULED"
    | "RUNNING"
    | "FINISHED"
    | "FAILED"
    | "TERMINATION_REQUESTED"
    | "TERMINATING"
    | "TERMINATED"
    | "UNKNOWN";
export const JobRunStatus = {
    Created: "CREATED",
    Scheduled: "SCHEDULED",
    Running: "RUNNING",
    Finished: "FINISHED",
    Failed: "FAILED",
    TerminationRequested: "TERMINATION_REQUESTED",
    Terminating: "TERMINATING",
    Terminated: "TERMINATED",
    Unknown: "UNKNOWN",
} as const;
