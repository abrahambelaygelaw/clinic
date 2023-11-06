import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ["user"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const User = mongoose.model("User", UserSchema);

export default User;
