import express from "express";
import { login, refresh, logout } from "../controller/auth.js";

const router = express.Router();
router.post("/login", login);
router.get("/refresh", refresh);
router.post("/logout", logout);

export default router;
