import 'dotenv/config';
import express from "express";
import morgan from "morgan";
import bodyParser from 'body-parser';
import globalRouter from "./routers/globalRouter.js";
import restaurantRouter from "./routers/restaurantRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
const logger = morgan("dev");
const jsonParser = bodyParser.json();
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

const handleListening = () => {
    console.log(`Server listening on port ${process.env.SERVER_PORT} 🍽️`)
};
app.listen(process.env.SERVER_PORT, handleListening);