/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * +docs=Describes the configuration for the async-service
 */
export interface AsyncService extends TrueFoundry.BaseService {
    /** +value=async-service */
    type?: "async-service";
    /**
     * +label=Replicas
     * +usage=Deploy multiple instances of your pods to distribute incoming traffic across them, ensuring effective load balancing.
     * +icon=fa-clone
     */
    replicas?: TrueFoundry.AsyncServiceReplicas;
    rollout_strategy?: TrueFoundry.Rolling;
    worker_config?: TrueFoundry.WorkerConfig;
    sidecar?: TrueFoundry.AsyncProcessorSidecar;
}
