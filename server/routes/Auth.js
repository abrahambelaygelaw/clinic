import express from "express";
import { login, getUsers, refresh } from "../controller/authController.js";
import { register } from "../controller/UserController.js";
import { authenticateToken } from "../Middlewares/authenticateToken.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/refresh", refresh);
// router.get("/users", authenticateToken, getUsers);

export default router;
