/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * +docs=Describes the configuration for the docker build for a task
 * +label=Docker File
 * +icon=fa-brands fa-docker:#0db7ed
 */
export interface TaskDockerFileBuild {
    /** +value=dockerfile */
    type: "task-dockerfile-build";
    /**
     * +docs=FQN of the container registry. You can the FQN of your desired container registry (or add one)
     * in the  Integrations page[Integrations](https://app.truefoundry.tech/integrations?tab=docker-registry) page
     * +label=Docker Registry
     * +usage=FQN of the container registry. If you can't find your registry here,
     * add it through the [Integrations](/integrations?tab=docker-registry) page
     */
    docker_registry?: string;
    /**
     * +label=Path to Dockerfile
     * +usage=The file path of the Dockerfile relative to project root path.
     */
    dockerfile_path: string;
    /** +label=Build arguments to pass to docker build */
    build_args?: Record<string, string>;
}
