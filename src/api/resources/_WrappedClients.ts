import * as core from "../../core";
import * as TrueFoundry from "../index";
import { Agents } from "./agents/client/Client";
import { AgentVersions } from "./agentVersions/client/Client";
import { Applications } from "./applications/client/Client";
import { Artifacts } from "./artifacts/client/Client";
import { ArtifactVersions } from "./artifactVersions/client/Client";
import { DataDirectories } from "./dataDirectories/client/Client";
import { Models } from "./models/client/Client";
import { ModelVersions } from "./modelVersions/client/Client";
import { Prompts } from "./prompts/client/Client";
import { PromptVersions } from "./promptVersions/client/Client";
import { SecretGroups } from "./secretGroups/client/Client";
import { Tools } from "./tools/client/Client";
import { ToolVersions } from "./toolVersions/client/Client";
import { TracingProjects } from "./tracingProjects/client/Client";
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

export class WrappedAgents extends Agents {
    /**
     * Get agent API
     *
     * @param {string} fqn
     * @param {Agents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.agents.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: Agents.RequestOptions,
    ): Promise<TrueFoundry.GetAgentResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedAgentVersions extends AgentVersions {
    /**
     * Get agent version API
     *
     * @param {string} fqn
     * @param {AgentVersions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.agentVersions.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: AgentVersions.RequestOptions,
    ): Promise<TrueFoundry.GetAgentVersionResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
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

export class WrappedTools extends Tools {
    /**
     * Get tool API
     *
     * @param {string} fqn
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.tools.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: Tools.RequestOptions,
    ): Promise<TrueFoundry.GetToolResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedToolVersions extends ToolVersions {
    /**
     * Get tool version API
     *
     * @param {string} fqn
     * @param {ToolVersions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.toolVersions.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: ToolVersions.RequestOptions,
    ): Promise<TrueFoundry.GetToolVersionResponse> {
        return { data: await getByFqn(this, fqn, requestOptions) }
    }
}

export class WrappedTracingProjects extends TracingProjects {
    /**
     * Get tracing project API
     *
     * @param {string} fqn
     * @param {TracingProjects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TrueFoundry.UnprocessableEntityError}
     *
     * @example
     *     await client.v1.tracingProjects.getByFqn("fqn")
     */
    public async getByFqn(
        fqn: string,
        requestOptions?: TracingProjects.RequestOptions,
    ): Promise<TrueFoundry.GetTracingProjectResponse> {
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
