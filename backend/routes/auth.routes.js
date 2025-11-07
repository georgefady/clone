import express from "express";
import { login, signup, signout, logout} from "../controller/auth.controller.js";

const router = express.Router();

// Define your authentication routes here
router.post("/login", login);
router.post("/signup", signup);
router.post("/signout", signout);
router.post("/signin", logout);

export default router;