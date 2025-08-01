import {
    WrappedApplications,
    WrappedArtifacts,
    WrappedArtifactVersions,
    WrappedDataDirectories,
    WrappedModels,
    WrappedModelVersions,
    WrappedPrompts,
    WrappedPromptVersions,
    WrappedSecretGroups,
    WrappedWorkspaces,
} from "./api/resources/_WrappedClients";
import { TrueFoundryClient as BaseTrueFoundryClient } from "./Client";
import * as core from "./core";

export interface TrueFoundryClientOptions extends Omit<BaseTrueFoundryClient.Options, 'environment'> {
    baseUrl: core.Supplier<string>;
    environment?: core.Supplier<string>;
}

export class TrueFoundryClient extends BaseTrueFoundryClient {
    protected readonly _options: BaseTrueFoundryClient.Options;
    protected _applications: WrappedApplications | undefined;
    protected _artifacts: WrappedArtifacts | undefined;
    protected _artifactVersions: WrappedArtifactVersions | undefined;
    protected _dataDirectories: WrappedDataDirectories | undefined;
    protected _models: WrappedModels | undefined;
    protected _modelVersions: WrappedModelVersions | undefined;
    protected _prompts: WrappedPrompts | undefined;
    protected _promptVersions: WrappedPromptVersions | undefined;
    protected _secretGroups: WrappedSecretGroups | undefined;
    protected _workspaces: WrappedWorkspaces | undefined;

    constructor(_options: TrueFoundryClientOptions) {
        const options = { ..._options, environment: _options.environment ?? '' }
        super(options);
        this._options = options;
    }

    public get applications(): WrappedApplications {
        return (this._applications ??= new WrappedApplications(this._options));
    }

    public get artifacts(): WrappedArtifacts {
        return (this._artifacts ??= new WrappedArtifacts(this._options));
    }

    public get artifactVersions(): WrappedArtifactVersions {
        return (this._artifactVersions ??= new WrappedArtifactVersions(this._options));
    }

    public get dataDirectories(): WrappedDataDirectories {
        return (this._dataDirectories ??= new WrappedDataDirectories(this._options));
    }

    public get models(): WrappedModels {
        return (this._models ??= new WrappedModels(this._options));
    }

    public get modelVersions(): WrappedModelVersions {
        return (this._modelVersions ??= new WrappedModelVersions(this._options));
    }

    public get prompts(): WrappedPrompts {
        return (this._prompts ??= new WrappedPrompts(this._options));
    }

    public get promptVersions(): WrappedPromptVersions {
        return (this._promptVersions ??= new WrappedPromptVersions(this._options));
    }

    public get secretGroups(): WrappedSecretGroups {
        return (this._secretGroups ??= new WrappedSecretGroups(this._options));
    }

    public get workspaces(): WrappedWorkspaces {
        return (this._workspaces ??= new WrappedWorkspaces(this._options));
    }
}



