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

export default router;
