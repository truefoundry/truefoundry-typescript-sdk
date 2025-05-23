/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * +label=Autoscaling metrics
 * +usage=Metrics to use for the autoscaler
 * +sort=4
 */
export type ServiceAutoscalingMetrics =
    | TrueFoundry.CpuUtilizationMetric
    | TrueFoundry.RpsMetric
    | TrueFoundry.CronMetric;
