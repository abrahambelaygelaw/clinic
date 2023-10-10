import Medication from "../models/medicationsSchema.js";

export const addMedication = (req, res) => {
  const { name, price, amount } = req.body;
  const newMedication = new Medication({
    name: name,
    price: price,
    amount: amount,
  });
  newMedication
    .save()
    .then((saved) => {
      console.log(saved);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getMedication = async (req, res) => {
  try {
    // Query the database and retrieve the data
    const data = await Medication.find({}).exec();
    res.json(data); // Send the retrieved data as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
