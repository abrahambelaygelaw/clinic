import express from "express";
import { getUsers, addUser } from "../../controller/user.js";
const router = express.Router();

router.post("/adduser", addUser);
router.get("/users", getUsers);
export default router;
