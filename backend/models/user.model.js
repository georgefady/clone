import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, // optional but helpful to avoid whitespace issues
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // helps normalize email format
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // fixed typo here (was `minlenghth`)
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    profilePicture: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
// dotweb team leader
// george fady