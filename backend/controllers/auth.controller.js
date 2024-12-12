import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

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

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
