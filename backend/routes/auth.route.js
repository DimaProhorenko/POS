import express from "express";
import { getMe, login, logout } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = new express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/me", protect, getMe);

export default router;
