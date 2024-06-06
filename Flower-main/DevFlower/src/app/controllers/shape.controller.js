import { responseSuccess} from "@/utils/helpers";
import * as shapeService from "../services/shape.service";

export async function readRoot(req, res) {
    return responseSuccess(res, await shapeService.filter(req.query));
}

export async function readItem(req, res) {
    await responseSuccess(res, await shapeService.details(req.params.id));
}

export async function createItem(req, res) {
    await shapeService.create(req.body);
    return responseSuccess(res, null, 201);
}

export async function updateItem(req, res) {
    await shapeService.update(req.shape, req.body);
    return responseSuccess(res, null, 201);
}

export async function removeItem(req, res) {
    await shapeService.remove(req.shape);
    return responseSuccess(res);
}


