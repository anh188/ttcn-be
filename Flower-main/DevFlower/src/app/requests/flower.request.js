import Joi from "joi";
import {MAX_STRING_SIZE} from "@/configs";
import {FileUpload} from "@/utils/types";
import { tryValidateOrDefault} from "@/utils/helpers";

export const readRoot = Joi.object({
    q: tryValidateOrDefault(Joi.string().trim(), ""),
    page: tryValidateOrDefault(Joi.number().integer().min(1), 1),
    per_page: tryValidateOrDefault(Joi.number().integer().min(1).max(100), 20),
    field: tryValidateOrDefault(Joi.valid("created_at", "name",), "created_at"),
    sort_order: tryValidateOrDefault(Joi.valid("asc", "desc"), "desc"),
}).unknown(true);

export const createItem = Joi.object({
    name: Joi.string().trim().max(MAX_STRING_SIZE).required().label("Tên hoa"),
    science_name: Joi.string().trim().max(MAX_STRING_SIZE).label("Tên khoa học"),
    size: Joi.string().trim().max(MAX_STRING_SIZE).label("Kích cỡ"),
    characteristics: Joi.string().trim().max(MAX_STRING_SIZE).label("Đặc trưng"),
    set_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Bộ"),
    surname_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Họ"),
    surface_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Bề mặt"),
    part_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Phần"),
    aperture_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Loại khẩu độ"),
    genus_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Chi"),
    shape_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Hình dạng phấn hoa"),
    // Upload với nhiều ảnh
    pollen_grain_images: Joi.array()
        .items(
            Joi.object({
                originalname: Joi.string().trim().required().label("Tên ảnh"),
                mimetype: Joi.valid("image/jpeg", "image/png", "image/svg+xml", "image/webp")
                    .required()
                    .label("Định dạng ảnh"),
                buffer: Joi.binary().required().label("Ảnh đại diện"),
            })
                .instance(FileUpload)
                .label("Ảnh đại diện")
        )
        .label("Danh sách ảnh đại diện"),
    flower_images: Joi.array()
        .items(
            Joi.object({
                originalname: Joi.string().trim().required().label("Tên ảnh"),
                mimetype: Joi.valid("image/jpeg", "image/png", "image/svg+xml", "image/webp")
                    .required()
                    .label("Định dạng ảnh"),
                buffer: Joi.binary().required().label("Ảnh đại diện"),
            })
                .instance(FileUpload)
                .label("Ảnh đại diện")
        )
        .label("Danh sách ảnh đại diện"),    
});


export const updateItem = Joi.object({
    name: Joi.string().trim().max(MAX_STRING_SIZE).required().label("Tên hoa"),
    science_name: Joi.string().trim().max(MAX_STRING_SIZE).label("Tên khoa học"),
    size: Joi.string().trim().max(MAX_STRING_SIZE).label("Kích cỡ"),
    characteristics: Joi.string().trim().max(MAX_STRING_SIZE).label("Đặc trưng"),
    set_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Bộ"),
    surname_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Họ"),
    surface_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Bề mặt"),
    part_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Phần"),
    aperture_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Loại khẩu độ"),
    genus_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Chi"),
    shape_id: Joi.string().trim().max(MAX_STRING_SIZE).label("Hình dạng phấn hoa"),
    // Upload với nhiều ảnh
    pollen_grain_images: Joi.array()
        .items(
            Joi.object({
                originalname: Joi.string().trim().required().label("Tên ảnh"),
                mimetype: Joi.valid("image/jpeg", "image/png", "image/svg+xml", "image/webp")
                    .required()
                    .label("Định dạng ảnh"),
                buffer: Joi.binary().required().label("Ảnh đại diện"),
            })
                .instance(FileUpload)
                .label("Ảnh đại diện")
        )
        .label("Danh sách ảnh đại diện"),
    flower_images: Joi.array()
        .items(
            Joi.object({
                originalname: Joi.string().trim().required().label("Tên ảnh"),
                mimetype: Joi.valid("image/jpeg", "image/png", "image/svg+xml", "image/webp")
                    .required()
                    .label("Định dạng ảnh"),
                buffer: Joi.binary().required().label("Ảnh đại diện"),
            })
                .instance(FileUpload)
                .label("Ảnh đại diện")
        )
        .label("Danh sách ảnh đại diện"),    
});

