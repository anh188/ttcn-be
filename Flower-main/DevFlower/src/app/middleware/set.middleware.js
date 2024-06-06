import { isValidObjectId } from "mongoose";
import { responseError } from "@/utils/helpers";
import { Set } from "../models";


export const checkSetId = async function (req, res, next) {
    const _id = req.params.id;

    if (isValidObjectId(_id)) {
        const set = await Set.findOne({ _id });
        if (set) {
            req.set = set;
            return next();
        }
    }

    return responseError(res, 404, "Bộ không tồn tại hoặc đã bị xóa");
};
