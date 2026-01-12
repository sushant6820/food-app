import express from "express";
import { getUserCont, resetPasswordController, updateUserController } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";


const userRouter = express.Router();

////GET USER
userRouter.get("/getUser",protect, getUserCont)

////UPDATE PROFILE
userRouter.put("/updateUser", protect, updateUserController)

//////RESET PASSWORD
userRouter.post("/resetPassword", protect, resetPasswordController)


export default userRouter;