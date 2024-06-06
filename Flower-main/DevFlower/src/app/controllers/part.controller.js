import { responseSuccess} from "@/utils/helpers";
import * as partService from "../services/part.service";

export async function readRoot(req, res) {
    return responseSuccess(res, await partService.filter(req.query));
}

export async function readItem(req, res) {
    await responseSuccess(res, await partService.details(req.params.id));
}

export async function createItem(req, res) {
    await partService.create(req.body);
    return responseSuccess(res, null, 201);
}

export async function updateItem(req, res) {
    await partService.update(req.part, req.body);
    return responseSuccess(res, null, 201);
}

export async function removeItem(req, res) {
    await partService.remove(req.part);
    return responseSuccess(res);
}


