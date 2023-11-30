import express from "express";
import {
  addDrug,
  getDrugs,
  getDrug,
  deleteDrug,
  updateDrug,
} from "../../controller/drug.js";
import { verifyToken } from "../../Middlewares/verifyJWT.js";
const router = express.Router();
router.post("/drug", addDrug);
router.get("/drug", getDrugs);
router.get("/drug/:id", getDrug);
router.delete("/drug/:id", deleteDrug);
router.put("/drug/:id", updateDrug);

export default router;
