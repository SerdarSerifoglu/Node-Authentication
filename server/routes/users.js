import express from "express";
import UserService from "../services/userService.js";

const router = express.Router();

router.get("/test", async (req, res) => {
  var result = await UserService.test();
  res.json(result);
});
export default router;
