import { responseSuccess} from "@/utils/helpers";
import * as surfaceService from "../services/surface.service";

export async function readRoot(req, res) {
    return responseSuccess(res, await surfaceService.filter(req.query));
}

export async function readItem(req, res) {
    await responseSuccess(res, await surfaceService.details(req.params.id));
}

export async function createItem(req, res) {
    await surfaceService.create(req.body);
    return responseSuccess(res, null, 201);
}

export async function updateItem(req, res) {
    await surfaceService.update(req.surface, req.body);
    return responseSuccess(res, null, 201);
}

export async function removeItem(req, res) {
    await surfaceService.remove(req.surface);
    return responseSuccess(res);
}


