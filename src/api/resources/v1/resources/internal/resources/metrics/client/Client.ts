/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../../../core";
import * as TrueFoundry from "../../../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../../../errors/index";

export declare namespace Metrics {
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

export class Metrics {
    constructor(protected readonly _options: Metrics.Options) {}

    /**
     * List charts for a given Application based on parameters passed in the query.
     *
     * @param {string} workspaceId
     * @param {TrueFoundry.v1.internal.MetricsGetChartsRequest} request
     * @param {Metrics.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.BadRequestError}
     * @throws {@link TrueFoundry.NotFoundError}
     * @throws {@link TrueFoundry.MethodNotAllowedError}
     *
     * @example
     *     await client.v1.internal.metrics.getCharts("workspaceId", {
     *         applicationId: "applicationId",
     *         filterEntity: "application"
     *     })
     */
    public async getCharts(
        workspaceId: string,
        request: TrueFoundry.v1.internal.MetricsGetChartsRequest,
        requestOptions?: Metrics.RequestOptions,
    ): Promise<TrueFoundry.GetChartsResponse> {
        const { applicationId, startTs, endTs, filterEntity, filterQuery } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["applicationId"] = applicationId;
        if (startTs != null) {
            _queryParams["startTs"] = startTs;
        }

        if (endTs != null) {
            _queryParams["endTs"] = endTs;
        }

        _queryParams["filterEntity"] = filterEntity;
        if (filterQuery != null) {
            _queryParams["filterQuery"] = filterQuery;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                `api/svc/v1/metrics/${encodeURIComponent(workspaceId)}/charts`,
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
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as TrueFoundry.GetChartsResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new TrueFoundry.BadRequestError(_response.error.body as unknown);
                case 404:
                    throw new TrueFoundry.NotFoundError(_response.error.body as unknown);
                case 405:
                    throw new TrueFoundry.MethodNotAllowedError(_response.error.body as unknown);
                default:
                    throw new errors.TrueFoundryError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.TrueFoundryError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.TrueFoundryTimeoutError(
                    "Timeout exceeded when calling GET /api/svc/v1/metrics/{workspaceId}/charts.",
                );
            case "unknown":
                throw new errors.TrueFoundryError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["TFY_API_KEY"];
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
