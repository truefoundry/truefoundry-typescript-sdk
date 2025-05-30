/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * +docs=Describes the configuration for the python build for a task
 * +label=Python Buid Spec
 * +icon=fa-brands fa-python:#306998
 */
export interface TaskPythonBuild {
    /** +value=task-python-build */
    type: "task-python-build";
    /**
     * +docs=FQN of the container registry. You can the FQN of your desired container registry (or add one)
     * in the  Integrations page[Integrations](https://app.truefoundry.tech/integrations?tab=docker-registry) page
     * +label=Docker Registry
     * +usage=FQN of the container registry. If you can't find your registry here,
     * add it through the [Integrations](/integrations?tab=docker-registry) page
     */
    docker_registry?: string;
    /**
     * +label=Python version
     * +usage=Python version to run your application. Should be one of the tags listed on [Official Python Docker Page](https://hub.docker.com/_/python)
     * +message=Please enter a valid Python version tag
     */
    python_version?: string;
    /**
     * `Path to build context`
     * +label=Path to requirements
     * +usage=Path to `requirements.txt` relative to
     * `Path to build context`
     */
    requirements_path?: string;
    /**
     * +label=Pip packages to install
     * +usage=Define pip package requirements.
     * In Python/YAML E.g. ["fastapi>=0.90,<1.0", "uvicorn"]
     * +placeholder=Enter a pip package name E.g. fastapi>=0.90,<1.0
     */
    pip_packages?: string[];
    /**
     * +label=List of Debian packages to install.
     * +usage=Debian packages to install via `apt get`.
     * In Python/YAML E.g. ["git", "ffmpeg", "htop"]
     * +placeholder=Enter a debian package name E.g. ffmpeg
     */
    apt_packages?: string[];
    /**
     * +label=CUDA Version
     * +usage=Version of CUDA Toolkit and CUDNN to install in the image
     * These combinations are based off of publically available docker images on docker hub
     * You can also specify a valid tag of the form {cuda_version_number}-cudnn{cudnn_version_number}-{runtime|devel}-ubuntu{ubuntu_version}
     * Refer https://hub.docker.com/r/nvidia/cuda/tags for valid set of values
     * Note: We use deadsnakes ubuntu ppa to add Python that currently supports only Ubuntu 18.04, 20.04 and 22.04
     */
    cuda_version?: string;
}
