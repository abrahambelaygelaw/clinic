import jwt from "jsonwebtoken";
import User from "../models/User.js ";
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  const token = authHeader.split(" ")[1];
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
    return res.status(403).json({ error });
  }
};
