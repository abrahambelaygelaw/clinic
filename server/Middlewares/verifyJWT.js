import jwt from "jsonwebtoken";
import User from "../models/User.js ";
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    req.user = decoded.userInfo.username;
    req.roles = decoded.userInfo.roles;
    next();
  });
};
