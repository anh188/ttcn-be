import {Router} from "express";
// import {} from "@/utils/handlers";
import {validate} from "../app/middleware/common";

import * as surnameRequest from "../app/requests/surname.request";
import * as surnameMiddleware from "../app/middleware/surname.middleware";
import * as surnameController from "../app/controllers/surname.controller";

const router = Router();

// router.use((verifyToken));

router.get(
    "/",
    (validate(surnameRequest.readRoot)),
    (surnameController.readRoot)
);

router.get(
    "/:id",
    (surnameMiddleware.checkSurnameId),
    (surnameController.readItem)
);

router.post(
    "/",
    (validate(surnameRequest.createItem)),
    (surnameController.createItem)
);

router.put(
    "/:id",
    (surnameMiddleware.checkSurnameId),
    (validate(surnameRequest.updateItem)),
    (surnameController.updateItem),
);

router.delete(
    "/:id",
    (surnameMiddleware.checkSurnameId),
    (surnameController.removeItem)
);


export default router;
