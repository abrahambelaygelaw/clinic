import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import drug from "./routes/api/drug.js";
import transaction from "./routes/api/transaction.js";
import cookieParser from "cookie-parser";
import Auth from "./routes/Auth.js";
const app = express();

const url =
  "mongodb+srv://wizhard:camel@cluster0.rvjfud9.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(drug);
app.use(transaction);
app.use(Auth);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("listening on port 5000 ");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });
