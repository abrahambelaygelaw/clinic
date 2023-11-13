import express from "express";
import {
  addTransaction,
  getTransactions,
  getAllTransactions,
} from "../../controller/transaction.js";

const router = express.Router();
router.post("/transaction", addTransaction);
router.get("/transaction", getAllTransactions);
router.get("/transaction/:id", getTransactions);
export default router;
