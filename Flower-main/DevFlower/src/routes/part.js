import {Router} from "express";
// import {} from "@/utils/handlers";
import {validate} from "../app/middleware/common";

import * as partRequest from "../app/requests/part.request";
import * as partMiddleware from "../app/middleware/part.middleware";
import * as partController from "../app/controllers/part.controller";

const router = Router();

// router.use((verifyToken));

router.get(
    "/",
    (validate(partRequest.readRoot)),
    (partController.readRoot)
);

router.get(
    "/:id",
    (partMiddleware.checkPartId),
    (partController.readItem)
);

router.post(
    "/",
    (validate(partRequest.createItem)),
    (partController.createItem)
);

router.put(
    "/:id",
    (partMiddleware.checkPartId),
    (validate(partRequest.updateItem)),
    (partController.updateItem),
);

router.delete(
    "/:id",
    (partMiddleware.checkPartId),
    (partController.removeItem)
);


export default router;
