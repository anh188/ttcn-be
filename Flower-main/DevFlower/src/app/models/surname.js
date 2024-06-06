import { createModel } from "./base";

export const Surname = createModel("Surname", "surnames", {
    name: {
        type: String,
        required: true
    }
});