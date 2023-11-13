import User from "../models/User.js";
import bcrypt from "bcrypt";

export const addUser = async (req, res) => {
  const { username, password, roles } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, roles });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
