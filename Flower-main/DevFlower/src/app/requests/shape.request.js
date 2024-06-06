import Joi from "joi";
// import {User} from "../models";
import {MAX_STRING_SIZE} from "@/configs";
import {AsyncValidate} from "@/utils/types";
import {tryValidateOrDefault} from "@/utils/helpers";
import { Shape } from "../models";

export const readRoot = Joi.object({
    q: tryValidateOrDefault(Joi.string().trim(), ""),
    page: tryValidateOrDefault(Joi.number().integer().min(1), 1),
    per_page: tryValidateOrDefault(Joi.number().integer().min(1).max(100), 20),
    field: tryValidateOrDefault(Joi.valid("created_at", "name"), "created_at"),
    sort_order: tryValidateOrDefault(Joi.valid("asc", "desc"), "desc"),
}).unknown(true);

export const createItem = Joi.object({
    name: Joi.string().trim().max(MAX_STRING_SIZE).required().label("Hình dạng phấn hoa")
        .custom(
            (value, helpers) =>
                new AsyncValidate(value, async function () {
                    const shape = await Shape.findOne({name: value});
                    return !shape ? value : helpers.error("any.exists");
                }),
        ),
    
});

export const updateItem = Joi.object({
    name: Joi.string().trim().max(MAX_STRING_SIZE).required().label("Hình dạng phấn hoa")
        .custom(
            (value, helpers) =>
                new AsyncValidate(value, async function () {
                    const shape = await Shape.findOne({name: value});
                    return !shape ? value : helpers.error("any.exists");
                }),
        ),
});

