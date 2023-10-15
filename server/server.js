import express from "express";
import mongoose from "mongoose";
import medicationRouter from "./routes/medicationRouter.js";
import cors from "cors";
import addMedicationRouter from "./routes/addMedicationRouter.js";
import Auth from "./routes/Auth.js";
const app = express();

const url =
  "mongodb+srv://wizhard:camel@cluster0.rvjfud9.mongodb.net/?retryWrites=true&w=majority";
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(medicationRouter);
app.use(addMedicationRouter);
app.use(Auth);
app.use((req, res, next) => {
  console.log("parsed", req.body);
  next();
});
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3500, () => {
      console.log("listening on port 3500 ");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });
