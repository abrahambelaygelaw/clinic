import express from "express";
import {
  login,
  getUsers,
  refresh,
  logout,
} from "../controller/authController.js";
import { register } from "../controller/UserController.js";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/refresh", refresh);
router.get("/logout", logout);
// router.get("/users", authenticateToken, getUsers);

export default router;
