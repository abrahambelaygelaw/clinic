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
  files: {
    type: [String],
  },
  description: {
    type: String,
  },
  medType: {
    type: String,
    enum: pharmacyItems,
  },
});
const Medication = mongoose.model("medication", medicationSchema);
export default Medication;
