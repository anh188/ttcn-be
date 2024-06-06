import authRouter from "./auth";
import userRouter from "./user";
import apertureRouter from "./aperture";
import genusRouter from "./genus";
import partRouter from "./part";
import setRouter from "./set";
import surfaceRouter from "./surface";
import surnameRouter from "./surname";
import flowerRouter from "./flower";
import shapeRouter from "./shape";

export default function route(app) {
    app.use("/auth", authRouter);
    app.use("/users", userRouter);
    app.use("/apertures", apertureRouter);
    app.use("/genuses", genusRouter);
    app.use("/parts", partRouter);
    app.use("/sets", setRouter);
    app.use("/surfaces", surfaceRouter);
    app.use("/surnames", surnameRouter);
    app.use("/flowers", flowerRouter);
    app.use("/shapes", shapeRouter);
}
