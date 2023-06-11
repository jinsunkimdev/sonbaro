import express from "express";
import { join, login } from "../controllers/userController.js";
import { getTrending, postTrending, search } from "../controllers/restaurantController.js"

const globalRouter = express.Router();

globalRouter.route("/").get(getTrending).post(postTrending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);
export default globalRouter;