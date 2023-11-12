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

const getDrugs = async (req, res) => {
  let filter = {};
  const name = req.query.name;
  const page = req.query.page || 1;
  const perpage = req.query.perpage || 15;
  const sort = req.query.sortedBy || "timestamp";
  const order = req.query.order || "asc";
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
    const data = await Drug.find(filter)
      .sort({
        [sort]: order === "asc" ? 1 : -1,
      })
      .skip(skip)
      .limit(perpage);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const countDrugs = async (req, res) => {
  let filter = {};
  const type = req.query.type;
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
  const name = req.query.name;
  if (name) {
    const regex = new RegExp(name, "i");
    filter.name = regex;
  }
  try {
    const data = await Drug.countDocuments(filter);
    res.json(data);
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

const editDrug = async (req, res) => {
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
export { countDrugs, addDrug, deleteDrug, getDrugs, editDrug };
