import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routers from "./routes/index.js";

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

const app = express();
dotenv.config();
app.use(express.json());
app.use("/api", routers);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(4000, () => {
  connect();
  console.log(`Connected: ${4000} port`);
});
