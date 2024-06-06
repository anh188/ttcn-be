import { createModel } from "./base";

export const Genus = createModel("Genus", "genuses", {
    name: {
        type: String,
        required: true
    }
});