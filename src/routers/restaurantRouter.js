import express from "express";
import { detail} from "../controllers/restaurantController.js";

const restaurantRouter = express.Router();

restaurantRouter.get("/:id", detail);

export default restaurantRouter;