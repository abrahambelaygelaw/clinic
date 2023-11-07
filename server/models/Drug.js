import mongoose from "mongoose";
import { pharmacyItems } from "../Constants.js";

const DrugSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  stockCardNo: {
    type: String,
    required: true,
  },
  DrugType: {
    type: String,
    enum: pharmacyItems,
  },
  strength: {
    type: String,
  },
  itemCode: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});
const Drug = mongoose.model("drug", DrugSchema);
export default Drug;
