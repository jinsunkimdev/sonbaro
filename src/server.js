import 'dotenv/config';
import express from "express";
import morgan from "morgan";
import requestIp from "request-ip";
import globalRouter from "./routers/globalRouter.js";
import restaurantRouter from "./routers/restaurantRouter.js";
import userRouter from "./routers/userRouter.js";
//変数を宣言
const app = express();
const logger = morgan("dev");
//View engine
app.set("view engine", "pug");
app.set('views', process.cwd() + "/src/views");
//Middleware
app.use(logger);
app.set('trust proxy', true);
// Middleware to get the user's IP address
app.use(requestIp.mw());
//Router
 app.use("/", globalRouter);
 app.use("/restaurants", restaurantRouter);
app.use("/users", userRouter);
const home = (req, res) => {
    return res.send("Home");
};
const login = (req, res) => {
    return res.send("Login");
};

app.get("/", home);
app.get("/login", login);

const handleListening = () => {
    console.log(`Server listening on port ${process.env.SERVER_PORT} 🍽️`)
};
app.listen(process.env.SERVER_PORT, '0.0.0.0', handleListening);