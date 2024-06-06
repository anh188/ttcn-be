import { responseSuccess} from "@/utils/helpers";
import * as setService from "../services/set.service";

export async function readRoot(req, res) {
    return responseSuccess(res, await setService.filter(req.query));
}

export async function readItem(req, res) {
    await responseSuccess(res, await setService.details(req.params.id));
}

export async function createItem(req, res) {
    await setService.create(req.body);
    return responseSuccess(res, null, 201);
}

export async function updateItem(req, res) {
    await setService.update(req.set, req.body);
    return responseSuccess(res, null, 201);
}

export async function removeItem(req, res) {
    await setService.remove(req.set);
    return responseSuccess(res);
}


