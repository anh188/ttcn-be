import {Router} from "express";
// import {} from "@/utils/handlers";
import {validate} from "../app/middleware/common";

import * as apertureRequest from "../app/requests/aperture.request";
import * as apertureMiddleware from "../app/middleware/aperture.middleware";
import * as apertureController from "../app/controllers/aperture.controller";

const router = Router();

// router.use((verifyToken));

router.get(
    "/",
    (validate(apertureRequest.readRoot)),
    (apertureController.readRoot)
);

router.get(
    "/:id",
    (apertureMiddleware.checkApertureId),
    (apertureController.readItem)
);

router.post(
    "/",
    (validate(apertureRequest.createItem)),
    (apertureController.createItem)
);

router.put(
    "/:id",
    (apertureMiddleware.checkApertureId),
    (validate(apertureRequest.updateItem)),
    (apertureController.updateItem),
);

router.delete(
    "/:id",
    (apertureMiddleware.checkApertureId),
    (apertureController.removeItem)
);


export default router;
