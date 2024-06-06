import { isValidObjectId } from "mongoose";
import { responseError } from "@/utils/helpers";
import { Flower } from "../models";


export const checkFlowerId = async function (req, res, next) {
    const _id = req.params.id;

    if (isValidObjectId(_id)) {
        const flower = await Flower.findOne({ _id });
        if (flower) {
            req.flower = flower;
            return next();
        }
    }

    return responseError(res, 404, "Hoa không tồn tại hoặc đã bị xóa");
};
