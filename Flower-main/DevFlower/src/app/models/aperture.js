import {createModel} from "./base";

export const Aperture = createModel("Aperture", "aperture", {
    name: {
        type: String,
        required: true
    }
});
