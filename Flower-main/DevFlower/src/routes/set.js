import {Router} from "express";
// import {} from "@/utils/handlers";
import {validate} from "../app/middleware/common";

import * as setRequest from "../app/requests/set.request";
import * as setMiddleware from "../app/middleware/set.middleware";
import * as setController from "../app/controllers/set.controller";

const router = Router();

// router.use((verifyToken));

router.get(
    "/",
    (validate(setRequest.readRoot)),
    (setController.readRoot)
);

router.get(
    "/:id",
    (setMiddleware.checkSetId),
    (setController.readItem)
);

router.post(
    "/",
    (validate(setRequest.createItem)),
    (setController.createItem)
);

router.put(
    "/:id",
    (setMiddleware.checkSetId),
    (validate(setRequest.updateItem)),
    (setController.updateItem),
);

router.delete(
    "/:id",
    (setMiddleware.checkSetId),
    (setController.removeItem)
);


export default router;
