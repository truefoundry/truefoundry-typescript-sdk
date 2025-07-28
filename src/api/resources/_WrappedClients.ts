import * as core from "../../core";
import * as TrueFoundry from "../index";
import { Applications } from "./applications/client/Client";
import { Artifacts } from "./artifacts/client/Client";
import { ArtifactVersions } from "./artifactVersions/client/Client";
import { DataDirectories } from "./dataDirectories/client/Client";
import { Models } from "./models/client/Client";
import { ModelVersions } from "./modelVersions/client/Client";
import { Prompts } from "./prompts/client/Client";
import { PromptVersions } from "./promptVersions/client/Client";
import { SecretGroups } from "./secretGroups/client/Client";
import { Workspaces } from "./workspaces/client/Client";

interface HasAsyncListMethod<T> {
    list(request: { fqn: string; limit?: number }, requestOptions?: object): Promise<core.Page<T>>;
}

async function getByFqn<T>(client: HasAsyncListMethod<T>, fqn: string, requestOptions?: object) {
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

export class WrappedApplications extends Applications {
    /**
     * Get application API
     *
     * @param {string} fqn
     * @param {Applications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.applications.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: Applications.RequestOptions,
    ): Promise<TrueFoundry.GetApplicationResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedArtifacts extends Artifacts {
    /**
     * Get artifact API
     *
     * @param {string} fqn
     * @param {Artifacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.artifacts.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: Artifacts.RequestOptions,
    ): Promise<TrueFoundry.GetArtifactResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedArtifactVersions extends ArtifactVersions {
    /**
     * Get artifact version API
     *
     * @param {string} fqn
     * @param {ArtifactVersions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.artifactVersions.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: ArtifactVersions.RequestOptions,
    ): Promise<TrueFoundry.GetArtifactVersionResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedDataDirectories extends DataDirectories {
    /**
     * Get data directory API
     *
     * @param {string} fqn
     * @param {DataDirectories.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.dataDirectories.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: DataDirectories.RequestOptions,
    ): Promise<TrueFoundry.GetDataDirectoryResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedModels extends Models {
    /**
     * Get model API
     *
     * @param {string} fqn
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.models.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: Models.RequestOptions,
    ): Promise<TrueFoundry.GetModelResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedModelVersions extends ModelVersions {
    /**
     * Get model version API
     *
     * @param {string} fqn
     * @param {ModelVersions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.modelVersions.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: ModelVersions.RequestOptions,
    ): Promise<TrueFoundry.GetModelVersionResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedPrompts extends Prompts {
    /**
     * Get prompt API
     *
     * @param {string} fqn
     * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.prompts.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: Prompts.RequestOptions,
    ): Promise<TrueFoundry.GetPromptResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedPromptVersions extends PromptVersions {
    /**
     * Get prompt version API
     *
     * @param {string} fqn
     * @param {PromptVersions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.promptVersions.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: PromptVersions.RequestOptions,
    ): Promise<TrueFoundry.GetPromptVersionResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedSecretGroups extends SecretGroups {
    /**
     * Get secret group API
     *
     * @param {string} fqn
     * @param {SecretGroups.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.secretGroups.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: SecretGroups.RequestOptions,
    ): Promise<TrueFoundry.GetSecretGroupResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedWorkspaces extends Workspaces {
    /**
     * Get workspace API
     *
     * @param {string} fqn
     * @param {Workspaces.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.workspaces.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: Workspaces.RequestOptions,
    ): Promise<TrueFoundry.GetWorkspaceResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}
