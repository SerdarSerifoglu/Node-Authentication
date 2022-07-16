import express from "express";
import UserService from "../services/userService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  var result = await UserService.load();
  res.json(result);
});
export default router;
