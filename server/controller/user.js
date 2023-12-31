import User from "../models/User.js";
import bcrypt from "bcrypt";

const addUser = async (req, res) => {
  const { firstName, lastName, password, admin, username } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      role: admin ? "admin" : "user",
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Registration error : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(id);

    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid old password" });
    }

    // Update password with the new hashed password
    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = newHashedPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "password update failed" });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {}
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.set(req.body);
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    console.error("error updating user", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error, "error deleting user");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { addUser, deleteUser, updateUser, getUsers, changePassword };
