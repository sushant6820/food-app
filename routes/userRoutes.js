import express from "express";
import { deleteProfileCont, getUserCont, resetPasswordController, updateUserController, updateUserPassword } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";


const userRouter = express.Router();

////GET USER
userRouter.get("/getUser",protect, getUserCont)

////UPDATE PROFILE
userRouter.put("/updateUser", protect, updateUserController)

//////RESET PASSWORD
userRouter.post("/resetPassword", protect, resetPasswordController)

///////////UPDATE USER PASSWORD
userRouter.post("/updateUserPassword", protect, updateUserPassword)

////////DELETE USER
userRouter.delete("/deleteUser/:id", protect, deleteProfileCont)

export default userRouter;