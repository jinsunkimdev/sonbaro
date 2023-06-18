import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import globalRouter from "./routers/globalRouter.js";
import restaurantRouter from "./routers/restaurantRouter.js";
import userRouter from "./routers/userRouter.js";
import { localsMiddleware } from "./middlewares.js";

const app = express();
const logger = morgan("dev");
//View engine
app.set("view engine", "pug");
app.set('views', process.cwd() + "/src/views");
//Middleware
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
    //   cookie: {
    //     maxAge: 20000,
    //     }
      store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
    })
  );
app.use(localsMiddleware);
//Router
app.use("/", globalRouter);
app.use("/restaurants", restaurantRouter);
app.use("/users", userRouter);

export default app;