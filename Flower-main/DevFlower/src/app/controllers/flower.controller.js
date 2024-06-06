import { responseSuccess} from "@/utils/helpers";
import * as flowerService from "../services/flower.service";

export async function readRoot(req, res) {
    return responseSuccess(res, await flowerService.filter(req.query));
}

export async function readItem(req, res) {
    await responseSuccess(res, await flowerService.details(req.params.id));
}


export async function createItem(req, res) {
    await flowerService.create(req.body);
    return responseSuccess(res, null, 201);
}

export async function updateItem(req, res) {
    await flowerService.update(req.flower, req.body);
    return responseSuccess(res, null, 201);
}

export async function removeItem(req, res) {
    await flowerService.remove(req.flower);
    return responseSuccess(res);
}


