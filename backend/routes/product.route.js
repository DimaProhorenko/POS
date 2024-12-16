import express from "express";
import { authorize, protect } from "../middleware/auth.middleware.js";
import { createProduct } from "../controllers/product.controller.js";

const router = new express.Router();

router.post("/products", protect, authorize(["admin"]), createProduct);

export default router;
