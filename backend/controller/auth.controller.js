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

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        generatetokenandcookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            coverPicture: user.coverPicture,
            profilePicture: user.profilePicture,
            followers: user.followers,
            followings: user.followings
        });
    } catch (error) {
        console.log("Error in login controller:", error);
        res.status(500).json({
            message: "Error logging in",
            error: error.message
        });
    }
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
    try {
        res.cookie("token", "", {
          
        });
        res.status(200).json({
            message: "Logged out successfully"
        });
    }
    catch (error) {
        console.log("Error in logout controller:", error);
        res.status(500).json({
            message: "Error logging out",
            error: error.message
        });
    }
};

// Placeholder getMe function
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            coverPicture: user.coverPicture,
            profilePicture: user.profilePicture,
            followers: user.followers,
            followings: user.followings
        });
    } catch (error) {
        console.log("Error in getMe controller:", error);
        res.status(500).json({
            message: "Error fetching user data",
            error: error.message
        });
    }
};
// dotweb team leader
//george fady
