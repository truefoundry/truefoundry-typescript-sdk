/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ForwardAction {
    /** +value=forward */
    type: "forward";
    /**
     * +docs=Service uri to redirect to. This is the kubernetes fully qualified domain name that the target service can be reached on
     * Eg - For a service called `sample-service` in workspace `ws` this would be `sample-service.ws.svc.cluster.local
     * +label=Service URI
     */
    service_uri: string;
    /**
     * +docs=Port to redirect the service traffic to
     * +label=Target port
     */
    port: number;
}
