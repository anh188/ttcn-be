import { responseSuccess} from "@/utils/helpers";
import * as surnameService from "../services/surname.service";

export async function readRoot(req, res) {
    return responseSuccess(res, await surnameService.filter(req.query));
}

export async function readItem(req, res) {
    await responseSuccess(res, await surnameService.details(req.params.id));
}

export async function createItem(req, res) {
    await surnameService.create(req.body);
    return responseSuccess(res, null, 201);
}

export async function updateItem(req, res) {
    await surnameService.update(req.surname, req.body);
    return responseSuccess(res, null, 201);
}

export async function removeItem(req, res) {
    await surnameService.remove(req.surname);
    return responseSuccess(res);
}


