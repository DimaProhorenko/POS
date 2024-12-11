import express from "express";
import { login, signup } from "../controllers/auth.controller.js";
import { protect, authorize } from "../middleware/auth.middleware.js";

const router = new express.Router();

router.post("/signup", protect, authorize("admin"), signup);
router.post("/login", login);

export default router;
