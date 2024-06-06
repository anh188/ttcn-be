import { createModel } from "./base";   

export const Part = createModel("Part", "parts", {
    name: {
        type: String,
        required: true
    }
});