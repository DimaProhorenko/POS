import { v2 as cloudinary } from "cloudinary";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const createProduct = async (req, res) => {
  console.log("FUck");
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
      const uploadResults = await Promise.all(
        images.map((image) =>
          cloudinary.uploader
            .upload(image.file, { resource_type: "auto" })
            .then((res) => res.secure_url)
        )
      );
      imageUrls = uploadResults
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);
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
    console.log("lksdjflkjdsf", error);
    return res.status(500).json({ msg: error.message });
  }
};
