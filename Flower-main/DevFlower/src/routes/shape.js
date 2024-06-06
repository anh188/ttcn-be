import {Router} from "express";
// import {} from "@/utils/handlers";
import {validate} from "../app/middleware/common";

import * as shapeRequest from "../app/requests/shape.request";
import * as shapeMiddleware from "../app/middleware/shape.middleware";
import * as shapeController from "../app/controllers/shape.controller";

const router = Router();

// router.use((verifyToken));

router.get(
    "/",
    (validate(shapeRequest.readRoot)),
    (shapeController.readRoot)
);

router.get(
    "/:id",
    (shapeMiddleware.checkShapeId),
    (shapeController.readItem)
);

router.post(
    "/",
    (validate(shapeRequest.createItem)),
    (shapeController.createItem)
);

router.put(
    "/:id",
    (shapeMiddleware.checkShapeId),
    (validate(shapeRequest.updateItem)),
    (shapeController.updateItem),
);

router.delete(
    "/:id",
    (shapeMiddleware.checkShapeId),
    (shapeController.removeItem)
);


export default router;
