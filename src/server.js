import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import restaurantRouter from "./routers/restaurantRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
const logger = morgan("dev");
//View engine
app.set("view engine", "pug");
app.set('views', process.cwd() + "/src/views");
//Middleware
app.use(logger);
app.use(express.urlencoded({ extended: true }));
//Router
app.use("/", globalRouter);
app.use("/restaurants", restaurantRouter);
app.use("/users", userRouter);

export default app;