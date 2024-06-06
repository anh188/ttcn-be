import { responseSuccess} from "@/utils/helpers";
import * as genusService from "../services/genus.service";

export async function readRoot(req, res) {
    return responseSuccess(res, await genusService.filter(req.query));
}

export async function readItem(req, res) {
    await responseSuccess(res, await genusService.details(req.params.id));
}

export async function createItem(req, res) {
    await genusService.create(req.body);
    return responseSuccess(res, null, 201);
}

export async function updateItem(req, res) {
    await genusService.update(req.genus, req.body);
    return responseSuccess(res, null, 201);
}

export async function removeItem(req, res) {
    await genusService.remove(req.genus);
    return responseSuccess(res);
}


