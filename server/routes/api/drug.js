import express from "express";
import { addDrug, getDrugs } from "../../controller/drug.js";

const router = express.Router();
router.post("/drug", addDrug);
router.get("/drug", getDrugs);

export default router;
