import express from "express";
import AuthService from "../services/authService.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  var result = await AuthService.signup(req.body);
  res.json(result);
});

export default router;
