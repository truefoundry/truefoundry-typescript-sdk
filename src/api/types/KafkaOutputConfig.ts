/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * +docs=Describes the configuration for the output Kafka worker
 * +label=Kafka
 */
export interface KafkaOutputConfig {
    /** +value=kafka */
    type: "kafka";
    /**
     * +label=Bootstrap servers
     * +usage='Kafka Bootstrap servers - Comma separated list of Kafka brokers "hostname:port" to connect to for bootstrap'
     * +sort=1
     */
    bootstrap_servers: string;
    /**
     * +label=Topic Name
     * +usage=Kafka topic to publish to
     * +sort=2
     */
    topic_name: string;
    /**
     * +label=TLS
     * +usage=TLS configuration for SASL authentication
     */
    tls: boolean;
    auth?: TrueFoundry.KafkaSaslAuth;
}
