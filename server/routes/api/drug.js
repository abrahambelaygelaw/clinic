import express from "express";
import {
  addDrug,
  getDrugs,
  countDrugs,
  deleteDrug,
  editDrug,
} from "../../controller/drug.js";

const router = express.Router();
router.post("/drug", addDrug);
router.get("/drug", getDrugs);
router.get("/drug/count", countDrugs);
router.delete("/drug/:id", deleteDrug);
router.put("/drug/:id", editDrug);

export default router;
