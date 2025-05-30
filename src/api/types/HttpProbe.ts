/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * +docs=Describes the Instructions for assessing container health by executing an HTTP GET request.
 * To learn more you can go [here](https://docs.truefoundry.com/docs/liveness-readiness-probe)
 * +label=Instructions for assessing container health by executing an HTTP GET request.
 */
export interface HttpProbe {
    /**
     * +sort=1
     * +label=Request Type
     * +value=http
     */
    type: "http";
    /**
     * +usage=Path to the health check endpoint
     * +sort=2
     */
    path: string;
    /**
     * +usage=Listening port for the health check endpoint
     * +sort=3
     */
    port: number;
    /**
     * +sort=4
     * +usage=Host name to connect to, defaults to the pod IP
     */
    host?: string;
    /**
     * +sort=5
     * +usage=Scheme to use for connecting to the host
     */
    scheme?: string;
}
