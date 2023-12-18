import Drug from "../models/Drug.js";
import Transaction from "../models/Transaction.js";

export const addTransaction = async (req, res) => {
  try {
    const formData = req.body;
    const drug = await Drug.findById(formData.drug);
    const newBalance =
      parseFloat(drug.balance) +
      parseFloat(formData.in) -
      parseFloat(formData.out);
    formData.balance = newBalance;
    const newTransaction = new Transaction(formData);
    await newTransaction.save();
    await Drug.updateOne(
      { _id: formData.drug },
      { $set: { balance: formData.balance } }
    );
    res.json(newTransaction);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error saving form data");
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const count = await Transaction.countDocuments();
    const data = await Transaction.find()
      .sort({ ["date"]: -1 })
      .populate("drug");
    res.json({ data, count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const count = await Transaction.countDocuments({ drug: req.params.id });
    const data = await Transaction.find({ drug: req.params.id }).sort({
      ["date"]: -1,
    });
    res.json({ data, count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
