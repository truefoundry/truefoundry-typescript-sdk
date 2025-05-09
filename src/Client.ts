/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { V1 } from "./api/resources/v1/client/Client";

export declare namespace TrueFoundryClient {
    export interface Options {
        environment: core.Supplier<string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class TrueFoundryClient {
    protected _v1: V1 | undefined;

    constructor(protected readonly _options: TrueFoundryClient.Options) {}

    public get v1(): V1 {
        return (this._v1 ??= new V1(this._options));
    }
}
