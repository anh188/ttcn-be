import { isValidObjectId } from "mongoose";
import { responseError } from "@/utils/helpers";
import { Aperture } from "../models";


export const checkApertureId = async function (req, res, next) {
    const _id = req.params.id;

    if (isValidObjectId(_id)) {
        const aperture = await Aperture.findOne({ _id });
        if (aperture) {
            req.aperture = aperture;
            return next();
        }
    }

    return responseError(res, 404, "Loại khẩu độ không tồn tại hoặc đã bị xóa");
};
