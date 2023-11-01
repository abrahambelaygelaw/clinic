import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN);

    res.status(200).send({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({ error: "No Token Provided" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
    const user = User.findById(decodedToken.userId);
    if (!user) {
      return res.status(401).json({ error: "Invalid Token" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
};
