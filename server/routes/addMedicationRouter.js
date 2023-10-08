import express from "express";
// import multer from "multer";
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname +
//         "_" +
//         Date.now() +
//         "." +
//         file.originalname.split(".").pop()
//     );
//   },
// });
// const upload = multer({ storage: storage });

const router = express.Router();
router.post("/add", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

export default router;
