import {Router} from "express";
// import {} from "@/utils/handlers";
import {validate, upload} from "../app/middleware/common";

import * as flowerRequest from "../app/requests/flower.request";
import * as flowerMiddleware from "../app/middleware/flower.middleware";
import * as flowerController from "../app/controllers/flower.controller";

const router = Router();

// router.use((verifyToken));

router.get(
    "/",
    (validate(flowerRequest.readRoot)),
    (flowerController.readRoot)
);

router.get(
    "/:id",
    (flowerMiddleware.checkFlowerId),
    (flowerController.readItem)
);

router.post(
    "/",
    (upload),
    (validate(flowerRequest.createItem)),
    (flowerController.createItem)
);

router.put(
    "/:id",
    (upload),
    (flowerMiddleware.checkFlowerId),
    (validate(flowerRequest.updateItem)),
    (flowerController.updateItem),
);

router.delete(
    "/:id",
    (flowerMiddleware.checkFlowerId),
    (flowerController.removeItem)
);


export default router;
