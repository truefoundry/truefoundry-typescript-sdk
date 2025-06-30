import * as core from "./core";
import {
    WrappedAgentVersions,
    WrappedApplications,
    WrappedArtifactVersions,
    WrappedModelVersions,
    WrappedPromptVersions,
    WrappedSecretGroups,
    WrappedToolVersions,
    WrappedTracingProjects,
    WrappedWorkspaces,
} from "./api/resources/_WrappedClients";
import { TrueFoundryClient as BaseTrueFoundryClient } from "./Client";

export interface TrueFoundryClientOptions extends Omit<BaseTrueFoundryClient.Options, 'environment'> {
    baseUrl: core.Supplier<string>;
    environment?: core.Supplier<string>;
}

export class TrueFoundryClient extends BaseTrueFoundryClient {
    protected readonly _options: BaseTrueFoundryClient.Options;
    protected _agentVersions: WrappedAgentVersions | undefined;
    protected _applications: WrappedApplications | undefined;
    protected _artifactVersions: WrappedArtifactVersions | undefined;
    protected _modelVersions: WrappedModelVersions | undefined;
    protected _promptVersions: WrappedPromptVersions | undefined;
    protected _secretGroups: WrappedSecretGroups | undefined;
    protected _toolVersions: WrappedToolVersions | undefined;
    protected _tracingProjects: WrappedTracingProjects | undefined;
    protected _workspaces: WrappedWorkspaces | undefined;

    constructor(_options: TrueFoundryClientOptions) {
        const options = {..._options, environment: _options.environment ?? ''}
        super(options);
        this._options = options;
    }

    public get agentVersions(): WrappedAgentVersions {
        return (this._agentVersions ??= new WrappedAgentVersions(this._options));
    }

    public get applications(): WrappedApplications {
        return (this._applications ??= new WrappedApplications(this._options));
    }

    public get artifactVersions(): WrappedArtifactVersions {
        return (this._artifactVersions ??= new WrappedArtifactVersions(this._options));
    }

    public get modelVersions(): WrappedModelVersions {
        return (this._modelVersions ??= new WrappedModelVersions(this._options));
    }

    public get promptVersions(): WrappedPromptVersions {
        return (this._promptVersions ??= new WrappedPromptVersions(this._options));
    }

    public get secretGroups(): WrappedSecretGroups {
        return (this._secretGroups ??= new WrappedSecretGroups(this._options));
    }

    public get toolVersions(): WrappedToolVersions {
        return (this._toolVersions ??= new WrappedToolVersions(this._options));
    }

    public get tracingProjects(): WrappedTracingProjects {
        return (this._tracingProjects ??= new WrappedTracingProjects(this._options));
    }

    public get workspaces(): WrappedWorkspaces {
        return (this._workspaces ??= new WrappedWorkspaces(this._options));
    }
}



