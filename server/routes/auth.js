import express from "express";
import AuthService from "../services/authService.js";

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  try {
    const user = await AuthService.insert(req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/signin", async (req, res, next) => {
  const { name, password } = req.body;
  const user = await AuthService.signIn(name, password);
  res.status(200).json(user);
});

export default router;
