import mongoose from "mongoose";
const TransactionSchema = mongoose.Schema({
  drug: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "drug",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  place: {
    type: String,
    required: true,
  },
  documentRef: {
    type: String,
  },
  in: {
    type: Number,
    required: true,
  },
  out: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  expDate: {
    type: Date,
    required: true,
  },
  batchNo: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
    default: "-",
  },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
