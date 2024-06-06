import { createModel } from "./base";

export const Shape = createModel("Shape", "shapes", {
    name: {
        type: String,
        required: true
    }
});