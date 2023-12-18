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
router.route("/drug").post(addDrug).get(getDrugs);

router.route("/drug/:id").get(getDrug).delete(deleteDrug).put(updateDrug);

export default router;
