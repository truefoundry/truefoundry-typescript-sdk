/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

export interface LatencyBasedLoadBalancingRule {
    id: string;
    when: TrueFoundry.LoadBalancingWhen;
    load_balance_targets: TrueFoundry.LatencyBasedLoadBalanceTarget[];
    type: "latency-based-routing";
}
