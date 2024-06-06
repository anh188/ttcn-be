import { isValidObjectId } from "mongoose";
import { responseError } from "@/utils/helpers";
import { Surface } from "../models";


export const checkSurfaceId = async function (req, res, next) {
    const _id = req.params.id;

    if (isValidObjectId(_id)) {
        const surface = await Surface.findOne({ _id });
        if (surface) {
            req.surface = surface;
            return next();
        }
    }

    return responseError(res, 404, "Bề mặt không tồn tại hoặc đã bị xóa");
};
