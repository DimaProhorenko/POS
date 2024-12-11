import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "manager", "cashier"],
      default: "cashier",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  // Hash password
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await await bcrypt.hash(this.password, salt);
  }

  //   Lowercase the name
  if (this.isModified("name")) {
    this.name = this.name.toLowerCase();
  }

  next();
});

UserSchema.methods.comparePasswords = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const userModel = mongoose.model("User", UserSchema);

export default userModel;
