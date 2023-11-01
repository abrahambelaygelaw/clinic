import express from "express";
import {
  register,
  login,
  getUsers,
  authenticateToken,
} from "../controller/userController.js";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/users", authenticateToken, getUsers);

export default router;
