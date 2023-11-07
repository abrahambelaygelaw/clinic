import Drug from "../models/Drug.js";

export const addDrug = (req, res) => {
  const formData = req.body;
  const newDrug = new Drug(formData);
  newDrug
    .save()
    .then(() => {
      res.status(200).send(newDrug);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving form data");
    });
};

export const getDrugs = async (req, res) => {
  const page = req.query.page || 1;
  const catagory = req.query.catagory;
  const searchQuery = req.query.name;
  const sort = req.query.sort;
  const regex = new RegExp(searchQuery, "i");
  const skip = (page - 1) * 2;
  const filter = {};
  if (searchQuery) {
    filter.name = regex;
  }
  if (catagory) {
    filter.catagory = catagory;
  }
  try {
    const data = await Drug.find(filter)
      .sort({
        name: sort === "1" ? 1 : -1,
      })
      .skip(skip)
      .limit(5);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
