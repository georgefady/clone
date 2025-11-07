import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // Define your user schema fields here
  username:{
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlenghth: 8,
  },
  followers: [
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        default: []
    }
  ],
  following: [
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        default: []
    }
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

}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
// in data base it will be stored in plural form 'users'
// mongoose automatically pluralizes the model name to create the collection name
// so 'User' model will be stored in 'users' collection in MongoDB
//george fady
// dotweb team
