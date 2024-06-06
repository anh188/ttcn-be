import {Router} from "express";
import {asyncHandler} from "@/utils/handlers";
import {verifyToken, validate, upload} from "../app/middleware/common";

import * as userRequest from "../app/requests/user.request";
import * as userMiddleware from "../app/middleware/user.middleware";
import * as userController from "../app/controllers/user.controller";

const router = Router();

router.use(asyncHandler(verifyToken));

router.get(
    "/",
    asyncHandler(validate(userRequest.readRoot)),
    asyncHandler(userController.readRoot)
);

router.get(
    "/:id",
    asyncHandler(userMiddleware.checkUserId),
    asyncHandler(userController.readItem)
);

router.post(
    "/",
    asyncHandler(validate(userRequest.createItem)),
    asyncHandler(userController.createItem)
);

router.put(
    "/:id",
    (upload),
    asyncHandler(userMiddleware.checkUserId),
    asyncHandler(validate(userRequest.updateItem)),
    asyncHandler(userController.updateItem),
);

router.delete(
    "/:id",
    asyncHandler(userMiddleware.checkUserId),
    asyncHandler(userController.removeItem)
);

router.patch(
    "/:id/reset-password",
    asyncHandler(userMiddleware.checkUserId),
    asyncHandler(validate(userRequest.resetPassword)),
    asyncHandler(userController.resetPassword),
);

export default router;
