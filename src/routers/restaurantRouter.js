import express from "express";
import { detail, comments } from "../controllers/restaurantController.js";

const restaurantRouter = express.Router();

restaurantRouter.get("/comments", comments);
restaurantRouter.get("/:id", detail);

export default restaurantRouter;