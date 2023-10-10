import express from "express";
import multer from "multer";
import Medication from "../models/medicationsSchema.js";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

const router = express.Router();
router.post("/add", upload.array("files"), (req, res) => {
  const formData = req.body;
  formData.files = req.files.map((item) => item.path);
  const newMed = new Medication(formData);
  newMed
    .save()
    .then(() => {
      res.status(200).send("Form data saved successfully");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving form data");
    });
});

export default router;
