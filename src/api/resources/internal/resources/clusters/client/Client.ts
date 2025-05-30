/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../core";
import * as TrueFoundry from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Clusters {
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

export class Clusters {
    constructor(protected readonly _options: Clusters.Options) {}

    /**
     * Get the auto provisioning status for the provided cluster
     *
     * @param {string} id - Cluster id of the cluster
     * @param {Clusters.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnauthorizedError}
     *
     * @example
     *     await client.internal.clusters.getAutoprovisioningState("id")
     */
    public getAutoprovisioningState(
        id: string,
        requestOptions?: Clusters.RequestOptions,
    ): core.HttpResponsePromise<TrueFoundry.GetAutoProvisioningStateResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getAutoprovisioningState(id, requestOptions));
    }

    private async __getAutoprovisioningState(
        id: string,
        requestOptions?: Clusters.RequestOptions,
    ): Promise<core.WithRawResponse<TrueFoundry.GetAutoProvisioningStateResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                `api/svc/v1/clusters/${encodeURIComponent(id)}/autoprovisioning-state`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "truefoundry-sdk",
                "X-Fern-SDK-Version": "0.0.0",
                "User-Agent": "truefoundry-sdk/0.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: _response.body as TrueFoundry.GetAutoProvisioningStateResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new TrueFoundry.UnauthorizedError(
                        _response.error.body as TrueFoundry.HttpError,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.TrueFoundryError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.TrueFoundryError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.TrueFoundryTimeoutError(
                    "Timeout exceeded when calling GET /api/svc/v1/clusters/{id}/autoprovisioning-state.",
                );
            case "unknown":
                throw new errors.TrueFoundryError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["TFY_API_KEY"];
        if (bearer == null) {
            throw new errors.TrueFoundryError({
                message:
                    "Please specify a bearer by either passing it in to the constructor or initializing a TFY_API_KEY environment variable",
            });
        }

        return `Bearer ${bearer}`;
    }
}
