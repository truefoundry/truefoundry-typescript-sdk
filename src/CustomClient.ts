import { WrappedAgentVersions, WrappedArtifactVersions, WrappedModelVersions, WrappedPromptVersions, WrappedToolVersions, WrappedTracingProjects, WrappedWorkspaces } from "./api/resources/v1/_WrappedClients";
import { V1 as BaseV1 } from "./api/resources/v1/client/Client";
import { TrueFoundryClient as BaseTrueFoundryClient } from "./Client";


class V1 extends BaseV1 {
    protected _agentVersions: WrappedAgentVersions | undefined;
    protected _artifactVersions: WrappedArtifactVersions | undefined;
    protected _modelVersions: WrappedModelVersions | undefined;
    protected _promptVersions: WrappedPromptVersions | undefined;
    protected _toolVersions: WrappedToolVersions | undefined;
    protected _tracingProjects: WrappedTracingProjects | undefined;
    protected _workspaces: WrappedWorkspaces | undefined;

    public get agentVersions(): WrappedAgentVersions {
        return (this._agentVersions ??= new WrappedAgentVersions(this._options));
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

export class TrueFoundryClient extends BaseTrueFoundryClient {
    protected _v1: V1 | undefined;

    public get v1(): V1 {
        if (!this._v1) {
            this._v1 = new V1(this._options);
        }
        return this._v1;
    }
}
