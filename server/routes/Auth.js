import express from "express";
import { login, refresh, logout } from "../controller/auth.js";
import { register } from "../controller/user.js";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/refresh", refresh);
router.get("/logout", logout);
// router.get("/users", authenticateToken, getUsers);

export default router;
