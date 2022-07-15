import express from "express";
import users from "./users.js";
import auth from "./auth.js";

const router = express.Router();
router.use("/users", users);
router.use("/auth", auth);

export default router;
