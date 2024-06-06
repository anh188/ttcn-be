import {Router} from "express";
// import {} from "@/utils/handlers";
import {validate} from "../app/middleware/common";

import * as genusRequest from "../app/requests/genus.request";
import * as genusMiddleware from "../app/middleware/genus.middleware";
import * as genusController from "../app/controllers/genus.controller";

const router = Router();

// router.use((verifyToken));

router.get(
    "/",
    (validate(genusRequest.readRoot)),
    (genusController.readRoot)
);

router.get(
    "/:id",
    (genusMiddleware.checkGenusId),
    (genusController.readItem)
);

router.post(
    "/",
    (validate(genusRequest.createItem)),
    (genusController.createItem)
);

router.put(
    "/:id",
    (genusMiddleware.checkGenusId),
    (validate(genusRequest.updateItem)),
    (genusController.updateItem),
);

router.delete(
    "/:id",
    (genusMiddleware.checkGenusId),
    (genusController.removeItem)
);


export default router;
