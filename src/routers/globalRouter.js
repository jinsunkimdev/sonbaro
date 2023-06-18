import express from "express";
import {  getJoin, postJoin, getLogin, postLogin } from "../controllers/userController.js";
import { getTrending, postTrending } from "../controllers/restaurantController.js"

const globalRouter = express.Router();

globalRouter.route("/").get(getTrending).post(postTrending);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/login").get(getLogin).post(postLogin);
export default globalRouter;