import express from "express";
import mongoose from "mongoose";
const app = express();
const uri =
  "mongodb+srv://wizhard:camel@cluster0.rvjfud9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3500, () => {
  console.log("listening on port 3500 ");
});
