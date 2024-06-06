import { responseSuccess} from "@/utils/helpers";
import * as apertureService from "../services/aperture.service";

export async function readRoot(req, res) {
    return responseSuccess(res, await apertureService.filter(req.query));
}

export async function readItem(req, res) {
    await responseSuccess(res, await apertureService.details(req.params.id));
}

export async function createItem(req, res) {
    await apertureService.create(req.body);
    return responseSuccess(res, null, 201);
}

export async function updateItem(req, res) {
    await apertureService.update(req.aperture, req.body);
    return responseSuccess(res, null, 201);
}

export async function removeItem(req, res) {
    await apertureService.remove(req.aperture);
    return responseSuccess(res);
}


