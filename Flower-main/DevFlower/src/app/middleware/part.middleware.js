import { isValidObjectId } from "mongoose";
import { responseError } from "@/utils/helpers";
import { Part } from "../models";


export const checkPartId = async function (req, res, next) {
    const _id = req.params.id;

    if (isValidObjectId(_id)) {
        const part = await Part.findOne({ _id });
        if (part) {
            req.part = part;
            return next();
        }
    }

    return responseError(res, 404, "Phần không tồn tại hoặc đã bị xóa");
};
