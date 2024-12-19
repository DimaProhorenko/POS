import express from "express";
import { authorize, protect } from "../middleware/auth.middleware.js";
import {
  createProduct,
  getProductById,
} from "../controllers/product.controller.js";

const router = new express.Router();

router.post("/", protect, authorize("admin"), createProduct);
router.get("/:id", protect, getProductById);

export default router;
