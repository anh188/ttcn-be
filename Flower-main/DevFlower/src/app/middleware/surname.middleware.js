import { isValidObjectId } from "mongoose";
import { responseError } from "@/utils/helpers";
import { Surname } from "../models";


export const checkSurnameId = async function (req, res, next) {
    const _id = req.params.id;

    if (isValidObjectId(_id)) {
        const surname = await Surname.findOne({ _id });
        if (surname) {
            req.surname = surname;
            return next();
        }
    }

    return responseError(res, 404, "Họ không tồn tại hoặc đã bị xóa");
};
