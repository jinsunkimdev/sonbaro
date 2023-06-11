import express from "express";
import { logout, edit, remove, see } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/lougout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get(":id", see);


export default userRouter;
