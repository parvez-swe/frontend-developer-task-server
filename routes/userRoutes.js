import { Router } from "express";
const userRouter = Router();

import {
  addUserData,
  getUserData,
  updateUserData,
  deleteUserData,
  getSectorData,
} from "../controllers/userController.js";

userRouter.post("/", addUserData);
userRouter.get("/", getUserData); // Handle password reset
userRouter.put("/", updateUserData);
userRouter.delete("/:id", deleteUserData);

// userRouter.post("/sector", addSectorData);

userRouter.get("/sector", getSectorData);

export default userRouter;
