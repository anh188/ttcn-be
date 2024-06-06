import { isValidObjectId } from "mongoose";
import { responseError } from "@/utils/helpers";
import { Shape } from "../models";


export const checkShapeId = async function (req, res, next) {
    const _id = req.params.id;

    if (isValidObjectId(_id)) {
        const shape = await Shape.findOne({ _id });
        if (shape) {
            req.shape = shape;
            return next();
        }
    }

    return responseError(res, 404, "Hình dạng phấn hoa không tồn tại hoặc đã bị xóa");
};
