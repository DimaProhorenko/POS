import { v2 as cloudinary } from "cloudinary";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";
import { uploadToCloudinary } from "../utils/helpers.js";

export const createProduct = async (req, res) => {
  try {
    const { title, description, images, category, price, quantity } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId).select("-password");
    let imageUrls = [];
    const priceNumber = Number.parseFloat(price);
    const quantityNumber = +quantity;

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (!title || !category || !priceNumber) {
      return res
        .status(400)
        .json({ msg: "Title, category, price fields are required" });
    }

    if (priceNumber < 0) {
      return res.status(400).json({ msg: "Price can not be less than 0" });
    }

    if (quantityNumber < 0) {
      return res.status(400).json({ msg: "Quantity can not be less than 0" });
    }

    const duplicate = await Product.findOne({ title });

    if (duplicate) {
      return res.status(400).json({ msg: "The product already exists" });
    }

    if (images && images.length > 0) {
      const res = await Promise.all(
        images.map((image) => uploadToCloudinary(image, "product-images")) // Call your function
      );
      imageUrls = res.map((item) => item.url);
    }

    const product = new Product({
      title,
      description,
      images: imageUrls,
      category,
      price: priceNumber,
      quantity: quantityNumber,
      creator: user._id,
    });

    await product.save();
    return res.status(201).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id: prodId } = req.params;
    const prod = await Product.findById(prodId).populate("creator");
    if (!prod) {
      return res.status(404).json({ msg: "Product not found" });
    }

    return res.status(200).json(prod);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
