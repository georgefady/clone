import express from "express";
import { login, signup, signout, logout } from "../controller/auth.controller.js";

const router = express.Router();
router.get("/me", protectRoute, getMe);
// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// Logout route
router.post("/logout", logout);

// Signout route (optional, but redundant — you can remove one)
router.post("/signout", signout);

export default router;
// dotweb team leader 
//george fady 