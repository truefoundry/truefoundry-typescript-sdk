import * as core from "../../core";
import * as TrueFoundry from "../index";
import { ApplicationsClient } from "./applications/client/Client";
import { ArtifactsClient } from "./artifacts/client/Client";
import { ArtifactVersionsClient } from "./artifactVersions/client/Client";
import { DataDirectoriesClient } from "./dataDirectories/client/Client";
import { ModelsClient } from "./models/client/Client";
import { ModelVersionsClient } from "./modelVersions/client/Client";
import { PromptsClient } from "./prompts/client/Client";
import { PromptVersionsClient } from "./promptVersions/client/Client";
import { SecretGroupsClient } from "./secretGroups/client/Client";
import { WorkspacesClient } from "./workspaces/client/Client";

interface HasAsyncListMethod<T, R = unknown> {
    list(request: { fqn?: string; limit?: number; [key: string]: unknown }, requestOptions?: object): Promise<core.Page<T, R>>;
}

async function getByFqn<T, R = unknown>(client: HasAsyncListMethod<T, R>, fqn: string, requestOptions?: object) {
    const response = await client.list({ fqn: fqn, limit: 1 }, requestOptions);
    let result: T | undefined;
    for await (const item of response) {
        result = item;
        break;
    }
    if (!result) {
        throw new TrueFoundry.NotFoundError({
            statusCode: 404,
            message: `No entity found with fqn: ${fqn}`,
        });
    }
    return result;
}

export class WrappedApplicationsClient extends ApplicationsClient {
    /**
     * Get application API
     *
     * @param {string} fqn
     * @param {ApplicationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.applications.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: ApplicationsClient.RequestOptions,
    ): Promise<TrueFoundry.GetApplicationResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedArtifactsClient extends ArtifactsClient {
    /**
     * Get artifact API
     *
     * @param {string} fqn
     * @param {ArtifactsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.artifacts.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: ArtifactsClient.RequestOptions,
    ): Promise<TrueFoundry.GetArtifactResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedArtifactVersionsClient extends ArtifactVersionsClient {
    /**
     * Get artifact version API
     *
     * @param {string} fqn
     * @param {ArtifactVersionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.artifactVersions.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: ArtifactVersionsClient.RequestOptions,
    ): Promise<TrueFoundry.GetArtifactVersionResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedDataDirectoriesClient extends DataDirectoriesClient {
    /**
     * Get data directory API
     *
     * @param {string} fqn
     * @param {DataDirectoriesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.dataDirectories.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: DataDirectoriesClient.RequestOptions,
    ): Promise<TrueFoundry.GetDataDirectoryResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedModelsClient extends ModelsClient {
    /**
     * Get model API
     *
     * @param {string} fqn
     * @param {ModelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.models.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: ModelsClient.RequestOptions,
    ): Promise<TrueFoundry.GetModelResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedModelVersionsClient extends ModelVersionsClient {
    /**
     * Get model version API
     *
     * @param {string} fqn
     * @param {ModelVersionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.modelVersions.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: ModelVersionsClient.RequestOptions,
    ): Promise<TrueFoundry.GetModelVersionResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedPromptsClient extends PromptsClient {
    /**
     * Get prompt API
     *
     * @param {string} fqn
     * @param {PromptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.prompts.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: PromptsClient.RequestOptions,
    ): Promise<TrueFoundry.GetPromptResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedPromptVersionsClient extends PromptVersionsClient {
    /**
     * Get prompt version API
     *
     * @param {string} fqn
     * @param {PromptVersionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.promptVersions.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: PromptVersionsClient.RequestOptions,
    ): Promise<TrueFoundry.GetPromptVersionResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedSecretGroupsClient extends SecretGroupsClient {
    /**
     * Get secret group API
     *
     * @param {string} fqn
     * @param {SecretGroupsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.secretGroups.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: SecretGroupsClient.RequestOptions,
    ): Promise<TrueFoundry.GetSecretGroupResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedWorkspacesClient extends WorkspacesClient {
    /**
     * Get workspace API
     *
     * @param {string} fqn
     * @param {WorkspacesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.workspaces.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: WorkspacesClient.RequestOptions,
    ): Promise<TrueFoundry.GetWorkspaceResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}
