import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import drug from "./routes/api/drug.js";
import user from "./routes/api/user.js";
import transaction from "./routes/api/transaction.js";
import cookieParser from "cookie-parser";
import Auth from "./routes/Auth.js";
import { verifyToken } from "./Middlewares/verifyJWT.js";
const app = express();

const url =
  "mongodb+srv://wizhard:camel@cluster0.rvjfud9.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.options("*", cors());
app.use(Auth);
app.use(verifyToken);
app.use(drug);
app.use(transaction);
app.use(user);

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
