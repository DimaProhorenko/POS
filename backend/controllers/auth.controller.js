import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const user = new User({ name, email, password, role });

    await user.save();

    return res.status(201).json({ ...user._doc, password: null });
  } catch (error) {}
};

export const login = async (req, res) => {
  try {
    const { email, password: enteredPassword } = req.body;

    if (!email || !enteredPassword) {
      return res.status(401).json({ msg: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.comparePasswords(enteredPassword))) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    generateToken(user._id, user.role, res);
    return res.status(200).json({ ...user._doc, password: null });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
