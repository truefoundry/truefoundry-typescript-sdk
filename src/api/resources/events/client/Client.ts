/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as TrueFoundry from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Events {
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

export class Events {
    constructor(protected readonly _options: Events.Options) {}

    /**
     * Get Events for Pod, Job Run, Application. The events are sourced from Kubernetes as well as events captured by truefoundry. Optional query parameters include startTs, endTs for filtering.
     *
     * @param {TrueFoundry.EventsGetRequest} request
     * @param {Events.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.BadRequestError}
     * @throws {@link TrueFoundry.ForbiddenError}
     * @throws {@link TrueFoundry.NotFoundError}
     *
     * @example
     *     await client.events.get()
     */
    public get(
        request: TrueFoundry.EventsGetRequest = {},
        requestOptions?: Events.RequestOptions,
    ): core.HttpResponsePromise<TrueFoundry.GetEventsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: TrueFoundry.EventsGetRequest = {},
        requestOptions?: Events.RequestOptions,
    ): Promise<core.WithRawResponse<TrueFoundry.GetEventsResponse>> {
        const { startTs, endTs, applicationId, applicationFqn, podNames, jobRunName } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (startTs != null) {
            _queryParams["startTs"] = startTs;
        }

        if (endTs != null) {
            _queryParams["endTs"] = endTs;
        }

        if (applicationId != null) {
            _queryParams["applicationId"] = applicationId;
        }

        if (applicationFqn != null) {
            _queryParams["applicationFqn"] = applicationFqn;
        }

        if (podNames != null) {
            if (Array.isArray(podNames)) {
                _queryParams["podNames"] = podNames.map((item) => item);
            } else {
                _queryParams["podNames"] = podNames;
            }
        }

        if (jobRunName != null) {
            _queryParams["jobRunName"] = jobRunName;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "api/svc/v1/events",
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
            return { data: _response.body as TrueFoundry.GetEventsResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new TrueFoundry.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new TrueFoundry.ForbiddenError(
                        _response.error.body as TrueFoundry.HttpError,
                        _response.rawResponse,
                    );
                case 404:
                    throw new TrueFoundry.NotFoundError(_response.error.body as unknown, _response.rawResponse);
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
                throw new errors.TrueFoundryTimeoutError("Timeout exceeded when calling GET /api/svc/v1/events.");
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
