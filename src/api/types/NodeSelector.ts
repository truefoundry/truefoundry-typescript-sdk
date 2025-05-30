/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * +label=Node selector
 * +usage=Constraints to select a Node - Specific GPU / Instance Families, On-Demand/Spot.
 */
export interface NodeSelector {
    /** +value=node_selector */
    type: "node_selector";
    /**
     * +label=Instance family
     * +usage=Instance family of the underlying machine to use. Multiple instance families can be supplied.
     * The workload is guaranteed to be scheduled on one of them.
     */
    instance_families?: string[];
    /**
     * +label=Capacity Type
     * +usage=Configure what type of nodes to run the app. By default no placement logic is applied.
     * "spot_fallback_on_demand" will try to place the application on spot nodes but will fallback to on-demand when spot nodes are not available.
     * "spot" will strictly place the application on spot nodes.
     * "on_demand" will strictly place the application on on-demand nodes.
     */
    capacity_type?: TrueFoundry.NodeSelectorCapacityType;
}
