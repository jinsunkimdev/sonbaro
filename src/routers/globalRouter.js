import express from "express";
import { join, login } from "../controllers/userController.js";
import { location, trending, search } from "../controllers/restaurantController.js"

const globalRouter = express.Router();

// globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);
globalRouter.get("/location", location).get("/", trending);
export default globalRouter;