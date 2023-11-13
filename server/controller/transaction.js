import Drug from "../models/Drug.js";
import Transaction from "../models/Transaction.js";

export const addTransaction = async (req, res) => {
  try {
    const formData = req.body;
    const drug = await Drug.findById(formData.drug);
    formData.balance = drug.balance + formData.in - formData.out;
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
    const data = await Transaction.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const data = await Transaction.find({ drug: req.params.id });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
