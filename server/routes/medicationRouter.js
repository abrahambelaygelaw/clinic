import express from "express";
import {
  addMedication,
  getMedication,
} from "../controller/medicationController.js";

const router = express.Router();
router.get("/medication", getMedication);
router.post("/medication", addMedication);

export default router;
