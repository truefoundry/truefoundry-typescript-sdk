/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TrueFoundry from "../index";

/**
 * +docs=Describes that we are using a pre-built image stored in a Docker Image registry
 * +label=Docker Image (Deploy an existing image)
 * +icon=fa-brands fa-docker:#0db7ed
 */
export interface Image {
    /** +value=image */
    type: "image";
    /**
     * +label=Image URI
     * +usage=The image URI. Specify the name of the image and the tag.
     * If the image is in Dockerhub, you can skip registry-url (for e.g. `tensorflow/tensorflow`).
     * You can use an image from a private registry using Advanced fields
     * +placeholder=registry-url/account/image:version (e.g. docker.io/tensorflow/tensorflow)
     */
    image_uri: string;
    /**
     * +docs=FQN of the container registry. You can the FQN of your desired container registry (or add one)
     * in the  Integrations page[Integrations](https://app.truefoundry.tech/integrations?tab=docker-registry) page
     * +label=Docker Registry
     * +usage=FQN of the container registry. If you can't find your registry here,
     * add it through the [Integrations](/integrations?tab=docker-registry) page
     */
    docker_registry?: string;
    /**
     * +label=Command Override
     * +usage=Override the command to run when container starts.
     * When deploying a Job, the command can be templatized by defining `params` and referencing them in command
     * E.g. `python main.py --learning_rate {{learning_rate}}`
     */
    command?: TrueFoundry.ImageCommand;
}
