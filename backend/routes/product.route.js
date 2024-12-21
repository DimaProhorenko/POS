import express from "express";
import { authorize, protect } from "../middleware/auth.middleware.js";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../controllers/product.controller.js";

const router = new express.Router();

router.post("/", protect, authorize("admin"), createProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProductById);

export default router;
