import { createModel } from "./base";

export const Surface = createModel("Surface", "surfaces", {
    name: {
        type: String,
        required: true
    }
});