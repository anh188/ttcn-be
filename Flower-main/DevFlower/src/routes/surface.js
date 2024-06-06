import {Router} from "express";
// import {} from "@/utils/handlers";
import {validate} from "../app/middleware/common";

import * as surfaceRequest from "../app/requests/surface.request";
import * as surfaceMiddleware from "../app/middleware/surface.middleware";
import * as surfaceController from "../app/controllers/surface.controller";

const router = Router();

// router.use((verifyToken));

router.get(
    "/",
    (validate(surfaceRequest.readRoot)),
    (surfaceController.readRoot)
);

router.get(
    "/:id",
    (surfaceMiddleware.checkSurfaceId),
    (surfaceController.readItem)
);

router.post(
    "/",
    (validate(surfaceRequest.createItem)),
    (surfaceController.createItem)
);

router.put(
    "/:id",
    (surfaceMiddleware.checkSurfaceId),
    (validate(surfaceRequest.updateItem)),
    (surfaceController.updateItem),
);

router.delete(
    "/:id",
    (surfaceMiddleware.checkSurfaceId),
    (surfaceController.removeItem)
);


export default router;
