/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * Model Version artifact.
 */
export interface ModelManifest {
    /** Name of the entity */
    name: string;
    description?: string;
    /** Key value metadata. Should be valid JSON. For e.g. `{"business-unit": "sales", "quality": "good", "rating": 4.5}` */
    metadata: Record<string, unknown>;
    /** Version alias is alternate, ideally human readable, version string to reference an artifact version. It should start with `v` followed by alphanumeric and it can include `.` and `-` in between (e.g. `v1.0.0`, `v1-prod`, `v3-dev`, etc) */
    version_alias?: string;
    /** Name of the ML Repo */
    ml_repo: string;
    /** Version of the entity */
    version?: number;
    type: "model-version";
    source: TrueFoundry.ModelManifestSource;
    /** Framework for the model version like Transformers, PyTorch, Sklearn, Xgboost etc with framework specific metadata. This will be used to infer model deployment configuration */
    framework?: TrueFoundry.ModelManifestFramework;
    environment?: TrueFoundry.ModelVersionEnvironment;
    /** Step/Epoch number in an iterative training loop the model version was created. Generally useful when logging a model version from a MLRepo Run */
    step?: number;
    /** ID of the MLRepo Run that generated the model version */
    run_id?: string;
}
