/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * +docs=Describes the configuration for the input AMQP worker
 * +label=AMQP
 */
export interface AmqpInputConfig {
    /** +value=amqp */
    type: "amqp";
    /**
     * +label=Queue URL
     * +usage=AMQP Queue URL of Subscriber
     * +sort=1
     */
    url: string;
    /**
     * +label=Queue Name
     * +usage=AMQP Queue Name
     * +sort=2
     */
    queue_name: string;
    /**
     * +label=Wait Time Seconds
     * +usage=Wait timeout for long polling.
     */
    wait_time_seconds: number;
}
