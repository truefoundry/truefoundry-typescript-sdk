import { AgentVersions } from "./agentVersions/client/Client";
import { Applications } from "./applications/client/Client";
import { ArtifactVersions } from "./artifactVersions/client/Client";
import { ModelVersions } from "./modelVersions/client/Client";
import { PromptVersions } from "./promptVersions/client/Client";
import { ToolVersions } from "./toolVersions/client/Client";
import { TracingProjects } from "./tracingProjects/client/Client";
import { Workspaces } from "./workspaces/client/Client";
import * as core from "../../core"
import * as TrueFoundry from "../index";

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
