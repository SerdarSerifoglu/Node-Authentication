import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routers from "./routes/index.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use("/api", routers);

const connect = () => {
  mongoose
    .connect(process.env.MONGO_DB_CONNECTION)
    .then(() => {
      console.log("Connected MongoDB");
    })
    .catch((err) => {
      throw err;
    });
};

app.listen(4000, () => {
  connect();
  console.log(`Connected: ${4000} port`);
});
