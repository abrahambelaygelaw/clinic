import medication from "../models/medicationsSchema.js";

export const addMedication = (req, res) => {
  const { name, price, amount } = req.body;
  const newMedication = new medication({
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
export const getMedication = (req, res) => {
  res.send("what the fuck");
};
