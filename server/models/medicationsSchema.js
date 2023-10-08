import mongoose from "mongoose";
import { pharmacyItems } from "../Constants.js";

const medicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pictures: {
    type: [String],
  },
  description: {
    type: String,
  },
  medicationType: {
    type: String,
    enum: pharmacyItems,
  },
});
const medication = mongoose.model("medication", medicationSchema);
export default medication;
