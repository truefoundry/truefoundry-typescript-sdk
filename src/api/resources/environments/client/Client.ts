/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as TrueFoundry from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Environments {
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

export class Environments {
    constructor(protected readonly _options: Environments.Options) {}

    /**
     * List environments, if no environments are found, default environments are created and returned. Pagination is available based on query parameters
     *
     * @param {TrueFoundry.EnvironmentsListRequest} request
     * @param {Environments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.environments.list({
     *         limit: 10,
     *         offset: 0
     *     })
     */
    public async list(
        request: TrueFoundry.EnvironmentsListRequest = {},
        requestOptions?: Environments.RequestOptions,
    ): Promise<core.Page<TrueFoundry.Environment>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: TrueFoundry.EnvironmentsListRequest,
            ): Promise<core.WithRawResponse<TrueFoundry.ListEnvironmentsResponse>> => {
                const { limit, offset } = request;
                const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
                if (limit != null) {
                    _queryParams["limit"] = limit.toString();
                }
                if (offset != null) {
                    _queryParams["offset"] = offset.toString();
                }
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)),
                        "api/svc/v1/environments",
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
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        data: _response.body as TrueFoundry.ListEnvironmentsResponse,
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.TrueFoundryError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
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
                            "Timeout exceeded when calling GET /api/svc/v1/environments.",
                        );
                    case "unknown":
                        throw new errors.TrueFoundryError({
                            message: _response.error.errorMessage,
                            rawResponse: _response.rawResponse,
                        });
                }
            },
        );
        let _offset = request?.offset != null ? request?.offset : 0;
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Pageable<TrueFoundry.ListEnvironmentsResponse, TrueFoundry.Environment>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => (response?.data ?? []).length > 0,
            getItems: (response) => response?.data ?? [],
            loadPage: (response) => {
                _offset += response?.data != null ? response.data.length : 1;
                return list(core.setObjectProperty(request, "offset", _offset));
            },
        });
    }

    /**
     * Creates a new Environment or updates an existing Environment.
     *
     * @param {TrueFoundry.CreateOrUpdateEnvironmentRequest} request
     * @param {Environments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.environments.createOrUpdate({
     *         manifest: {
     *             type: "environment",
     *             name: "name",
     *             color: {},
     *             isProduction: true,
     *             optimizeFor: "COST"
     *         }
     *     })
     */
    public createOrUpdate(
        request: TrueFoundry.CreateOrUpdateEnvironmentRequest,
        requestOptions?: Environments.RequestOptions,
    ): core.HttpResponsePromise<TrueFoundry.GetEnvironmentResponse> {
        return core.HttpResponsePromise.fromPromise(this.__createOrUpdate(request, requestOptions));
    }

    private async __createOrUpdate(
        request: TrueFoundry.CreateOrUpdateEnvironmentRequest,
        requestOptions?: Environments.RequestOptions,
    ): Promise<core.WithRawResponse<TrueFoundry.GetEnvironmentResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "api/svc/v1/environments",
            ),
            method: "PUT",
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
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as TrueFoundry.GetEnvironmentResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new TrueFoundry.UnprocessableEntityError(
                        _response.error.body as unknown,
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
                throw new errors.TrueFoundryTimeoutError("Timeout exceeded when calling PUT /api/svc/v1/environments.");
            case "unknown":
                throw new errors.TrueFoundryError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Get Environment associated with the provided id.
     *
     * @param {string} id - Environment id
     * @param {Environments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.environments.get("id")
     */
    public get(
        id: string,
        requestOptions?: Environments.RequestOptions,
    ): core.HttpResponsePromise<TrueFoundry.GetEnvironmentResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(id, requestOptions));
    }

    private async __get(
        id: string,
        requestOptions?: Environments.RequestOptions,
    ): Promise<core.WithRawResponse<TrueFoundry.GetEnvironmentResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                `api/svc/v1/environments/${encodeURIComponent(id)}`,
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
            return { data: _response.body as TrueFoundry.GetEnvironmentResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.TrueFoundryError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
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
                    "Timeout exceeded when calling GET /api/svc/v1/environments/{id}.",
                );
            case "unknown":
                throw new errors.TrueFoundryError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Delete Environment associated with the provided id.
     *
     * @param {string} id - Environment id
     * @param {Environments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.NotFoundError}
     * @throws {@link TrueFoundry.ConflictError}
     *
     * @example
     *     await client.environments.delete("id")
     */
    public delete(id: string, requestOptions?: Environments.RequestOptions): core.HttpResponsePromise<boolean> {
        return core.HttpResponsePromise.fromPromise(this.__delete(id, requestOptions));
    }

    private async __delete(
        id: string,
        requestOptions?: Environments.RequestOptions,
    ): Promise<core.WithRawResponse<boolean>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                `api/svc/v1/environments/${encodeURIComponent(id)}`,
            ),
            method: "DELETE",
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
            return { data: _response.body as boolean, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new TrueFoundry.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                case 409:
                    throw new TrueFoundry.ConflictError(
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
                    "Timeout exceeded when calling DELETE /api/svc/v1/environments/{id}.",
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
