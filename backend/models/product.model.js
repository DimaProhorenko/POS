import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Category",
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        default: "",
      },
    ],
    code: {
      type: Number,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

productSchema.pre("save", async function (next) {
  if (!this.code) {
    let unique = false;
    while (!unique) {
      const randomCode = Math.floor(1000000 + Math.random() * 9000000); // 7-digit number
      const existingProduct = await Product.findOne({ code: randomCode });
      if (!existingProduct) {
        this.code = randomCode;
        unique = true;
      }
    }
  }
  next();
});

const Product = mongoose.model("Product", productSchema);

export default Product;
