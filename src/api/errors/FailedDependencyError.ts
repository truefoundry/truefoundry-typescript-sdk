/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as TrueFoundry from "../index";

export class FailedDependencyError extends errors.TrueFoundryError {
    constructor(body: TrueFoundry.HttpError) {
        super({
            message: "FailedDependencyError",
            statusCode: 424,
            body: body,
        });
        Object.setPrototypeOf(this, FailedDependencyError.prototype);
    }
}
