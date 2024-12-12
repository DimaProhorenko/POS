import express from "express";
import { authorize, protect } from "../middleware/auth.middleware.js";
import { createUser } from "../controllers/admin.controller.js";

const router = new express.Router();

router.post("/create-user", protect, authorize("admin"), createUser);

export default router;
