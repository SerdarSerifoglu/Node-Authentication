import express from "express";
import AuthService from "../services/authService.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const user = await AuthService.insert(req.body);
  res.json(user);
});

export default router;
