import express from "express";
import multer from "multer";
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
  res.send(req.body);
  console.log(req.files);
});

export default router;
