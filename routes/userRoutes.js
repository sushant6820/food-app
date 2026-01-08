import express from "express";
import { getUserCont, updateUserController } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";


const userRouter = express.Router();

////GET USER
userRouter.get("/getUser",protect, getUserCont)

////UPDATE PROFILE
userRouter.put("/updateUser", protect, updateUserController)




export default userRouter;