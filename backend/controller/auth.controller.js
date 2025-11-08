import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generatetokenandcookie } from "../lib/utils/generatetoken.js";

export const signup = async (req, res) => {
try {
    const { username, email, password } = req.body;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailregex.test(email)) {
        return res.status(400).json({
            message: "Invalid email format"
        });
    }
    
    const existingUser = await User.findOne({username});
    if (existingUser) {
        return res.status(400).json({
            message: "Username already taken"
        });
    }

    const existingEmail = await User.findOne({email});
    if (existingEmail) {
        return res.status(400).json({
            message: "Email already in use"
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
       
        username,
        email,
        password: hashedPassword
    });

    if (newUser) {
        generatetokenandcookie(newUser._id, res);
        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            
            username: newUser.username,
            email: newUser.email,
            coverPicture: newUser.coverPicture,
            profilePicture: newUser.profilePicture,
           
        });
    } else {
        res.status(400).json({
            message: "Invalid user data"
        });
    }
} catch (error) {
    console.log( "Error in signup controller:", error );
    res.status(500).json({
            message: "Error registering user",
            error: error.message
    });
}
};

export const login = (req, res) => {
    res.json({
        data: "Login endpoint"
    });
};

export const forgotPassword = (req, res) => {
    res.json({
        data: "Forgot Password endpoint"
    });
};





// Placeholder signout function





export const signout = (req, res) => {
    res.json({
        data: "Signout endpoint"
    });
};

export const logout = (req, res) => {
    res.json({
        data: "Logout endpoint"
    });
};
 

// dotweb team leader
// george fady