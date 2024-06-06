import { createModel } from "./base";

export const Set = createModel("Set", "sets", {
    name: {
        type: String,
        required: true
    }
});