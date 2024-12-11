import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});