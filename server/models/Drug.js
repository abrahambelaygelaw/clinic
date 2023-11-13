import mongoose from "mongoose";

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
  balance: {
    type: Number,
    default: 0,
    required: true,
  },
  stockCardNo: {
    type: String,
    required: true,
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
  timestamp: { type: Date, default: Date.now },
});
DrugSchema.pre("save", function (next) {
  this.timestamp = new Date();
  next();
});
const Drug = mongoose.model("drug", DrugSchema);
export default Drug;
