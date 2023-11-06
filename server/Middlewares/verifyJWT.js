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
    const user = User.findOne({ username: decodedToken.user });
    if (!username) {
      return res.status(401).json({ error: "Invalid Token" });
    }
    req.username = user.username;
    req.roles = user.roles;
    next();
  } catch (error) {
    return res.status(403).json({ error });
  }
};
