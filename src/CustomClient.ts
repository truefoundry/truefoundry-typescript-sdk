import {
    WrappedApplicationsClient,
    WrappedArtifactsClient,
    WrappedArtifactVersionsClient,
    WrappedDataDirectoriesClient,
    WrappedModelsClient,
    WrappedModelVersionsClient,
    WrappedPromptsClient,
    WrappedPromptVersionsClient,
    WrappedSecretGroupsClient,
    WrappedWorkspacesClient,
} from "./api/resources/_WrappedClients";
import { TrueFoundryClient as BaseTrueFoundryClient } from "./Client";
import * as core from "./core";

export interface TrueFoundryClientOptions extends Omit<BaseTrueFoundryClient.Options, 'environment'> {
    baseUrl: core.Supplier<string>;
    environment?: core.Supplier<string>;
}

export class TrueFoundryClient extends BaseTrueFoundryClient {
    protected _applications: WrappedApplicationsClient | undefined;
    protected _artifacts: WrappedArtifactsClient | undefined;
    protected _artifactVersions: WrappedArtifactVersionsClient | undefined;
    protected _dataDirectories: WrappedDataDirectoriesClient | undefined;
    protected _models: WrappedModelsClient | undefined;
    protected _modelVersions: WrappedModelVersionsClient | undefined;
    protected _prompts: WrappedPromptsClient | undefined;
    protected _promptVersions: WrappedPromptVersionsClient | undefined;
    protected _secretGroups: WrappedSecretGroupsClient | undefined;
    protected _workspaces: WrappedWorkspacesClient | undefined;

    constructor(_options: TrueFoundryClientOptions) {
        const options = { ..._options, environment: _options.environment ?? '' } as BaseTrueFoundryClient.Options;
        super(options);
    }

    public get applications(): WrappedApplicationsClient {
        return (this._applications ??= new WrappedApplicationsClient(this._options));
    }

    public get artifacts(): WrappedArtifactsClient {
        return (this._artifacts ??= new WrappedArtifactsClient(this._options));
    }

    public get artifactVersions(): WrappedArtifactVersionsClient {
        return (this._artifactVersions ??= new WrappedArtifactVersionsClient(this._options));
    }

    public get dataDirectories(): WrappedDataDirectoriesClient {
        return (this._dataDirectories ??= new WrappedDataDirectoriesClient(this._options));
    }

    public get models(): WrappedModelsClient {
        return (this._models ??= new WrappedModelsClient(this._options));
    }

    public get modelVersions(): WrappedModelVersionsClient {
        return (this._modelVersions ??= new WrappedModelVersionsClient(this._options));
    }

    public get prompts(): WrappedPromptsClient {
        return (this._prompts ??= new WrappedPromptsClient(this._options));
    }

    public get promptVersions(): WrappedPromptVersionsClient {
        return (this._promptVersions ??= new WrappedPromptVersionsClient(this._options));
    }

    public get secretGroups(): WrappedSecretGroupsClient {
        return (this._secretGroups ??= new WrappedSecretGroupsClient(this._options));
    }

    public get workspaces(): WrappedWorkspacesClient {
        return (this._workspaces ??= new WrappedWorkspacesClient(this._options));
    }
}



