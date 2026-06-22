import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", logoutUser);
router.post("/logout", registerUser);

export default router;
