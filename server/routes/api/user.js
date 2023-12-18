import express from "express";
import { getUsers, addUser, changePassword, updateUser, deleteUser } from "../../controller/user.js";
const router = express.Router();

router.route("/user").post(addUser).get(getUsers);
router.route("/user/:id").put(updateUser).delete(deleteUser);
router.put("/changePassword/:id",changePassword)
export default router;
