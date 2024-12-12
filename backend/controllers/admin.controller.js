import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    console.log(name);

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
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
