import { isValidObjectId } from "mongoose";
import { responseError } from "@/utils/helpers";
import { Genus } from "../models";


export const checkGenusId = async function (req, res, next) {
    const _id = req.params.id;

    if (isValidObjectId(_id)) {
        const genus = await Genus.findOne({ _id });
        if (genus) {
            req.genus = genus;
            return next();
        }
    }

    return responseError(res, 404, "Chi không tồn tại hoặc đã bị xóa");
};
