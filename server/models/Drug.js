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
  },
  strength: {
    type: String,
    required: true,
  },
  itemCode: {
    type: String,
  },
  location: {
    type: String,
  },
  timestamp: { type: Date, default: Date.now },
});
DrugSchema.pre("save", function (next) {
  this.timestamp = new Date();
  next();
});
const Drug = mongoose.model("drug", DrugSchema);
export default Drug;
