import express from "express";
import {
  addDrug,
  getDrugs,
  getDrug,
  deleteDrug,
  updateDrug,
} from "../../controller/drug.js";
import { authenticateToken } from "../../Middlewares/verifyJWT.js";
const router = express.Router();
router.post("/drug", authenticateToken, addDrug);
router.get("/drug", authenticateToken, getDrugs);
router.get("/drug/:id", authenticateToken, getDrug);
router.delete("/drug/:id", authenticateToken, deleteDrug);
router.put("/drug/:id", authenticateToken, updateDrug);

export default router;
