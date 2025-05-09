/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * +label=Dynamic Scaling
 */
export interface SparkExecutorDynamicScaling {
    /** +value=dynamic */
    type: "dynamic";
    /**
     * +label=Min Instances
     * +usage=Minimum number of instances to start / scale down to
     * +sort=100
     */
    min: number;
    /**
     * +label=Max Instances
     * +usage=Maximum number of instances to scale up to
     * +sort=200
     */
    max: number;
}
