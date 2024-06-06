import { ObjectId, createModel } from "./base";
// import { ref, required } from "joi";

export const Flower = createModel("Flower","flowers", {
    name: {
        type: String,
        required: true
    },
    science_name: {
        type: String,
        default: ""
    },
    size: {
        type: String,
        default: ""
    },
    characteristics: {
        type: String,
        default: ""
    },
    pollen_grain_images: {
        type: Array,
        default: []
        
    },
    flower_images: {
        type: Array,
        default: []
    },
    set_id: {
        type: ObjectId,
        ref: "Set"
    },
    surname_id: {
        type: ObjectId,
        ref: "Surname"
    },
    surface_id: {
        type: ObjectId,
        ref: "Surface"
    },
    part_id: {
        type: ObjectId,
        ref: "Part"
    },
    aperture_id: {
        type: ObjectId,
        ref: "Aperture"
    },
    genus_id: {
        type: ObjectId,
        ref: "Genus"
    },
    shape_id: {
        type: ObjectId,
        ref: "Shape"
    }

});