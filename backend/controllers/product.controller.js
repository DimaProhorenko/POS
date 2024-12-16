import { v2 as cloudinary } from "cloudinary";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const createProduct = async (req, res) => {
  try {
    const { title, description, image, category, price, quantity } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId).select("-password");
    let imageUrl = "";

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (!title || !category || !price) {
      return res
        .status(400)
        .json({ msg: "Title, category, price fields are required" });
    }

    if (price < 0) {
      return res.status(400).json({ msg: "Price can not be less than 0" });
    }

    if (quantity < 0) {
      return res.status(400).json({ msg: "Quantity can not be less than 0" });
    }

    const duplicate = await Product.findOne({ title });

    if (duplicate) {
      return res.status(400).json({ msg: "The product already exists" });
    }

    if (image) {
      const uploadedImage = await cloudinary.uploader.upload(image);
      imageUrl = uploadedImage.secure_url;
    }

    const product = new Product({
      title,
      description,
      imageUrl,
      category,
      price,
      quantity,
    });

    await product.save();
    return res.status(201).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
