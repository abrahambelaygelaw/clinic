import Drug from "../models/Drug.js";

const addDrug = (req, res) => {
  const formData = req.body;
  const newDrug = new Drug(formData);
  newDrug
    .save()
    .then(() => {
      res.status(200).json(newDrug);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("Error saving form data");
    });
};
const getDrug = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Drug.findById(id);
    res.send(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getDrugs = async (req, res) => {
  let filter = {};
  const name = req.query.name;
  const page = req.query.page || 1;
  const perpage = req.query.perpage || 10;
  const sort = req.query.sortedBy || "timestamp";
  const order = req.query.order || "desc";
  const type = req.query.type;
  const skip = (page - 1) * perpage;

  if (type) {
    if (type === "under") {
      filter = {
        $expr: { $gte: ["$min", "$balance"] },
      };
    } else if (type === "over") {
      filter = {
        $expr: { $gte: ["$balance", "$max"] },
      };
    }
  }
  if (name) {
    const regex = new RegExp(name, "i");
    filter.name = regex;
  }
  try {
    const count = await Drug.countDocuments(filter);
    const data = await Drug.find(filter)
      .sort({
        [sort]: order === "desc" ? -1 : 1,
      })
      .skip(skip)
      .limit(perpage);
    res.json({ data, count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteDrug = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDrug = await Drug.findByIdAndDelete(id);
    if (!deletedDrug) {
      return res.status(404).json({ message: "Drug not found" });
    }
    res.status(200).json({ message: "Drug deleted successfully" });
  } catch (error) {
    console.error("Error deleting drug:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateDrug = async (req, res) => {
  const { id } = req.params;
  try {
    const drug = await Drug.findById(id);
    if (!drug) {
      return res.status(404).json({ message: "Drug not found" });
    }
    drug.set(req.body);

    const updatedDrug = await drug.save();
    res.status(200).json(updatedDrug);
  } catch (error) {
    console.error("Error updating drug:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export { addDrug, deleteDrug, getDrug, getDrugs, updateDrug };
