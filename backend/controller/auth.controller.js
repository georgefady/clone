import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailregex.test(email)) {
            return  res.status(400).json({
                message: "Invalid email format"
            });
        }
        const existingUser = await User.findOne({username});
            if (existingUser) {
                return res.status(400).json({
                    message: "Username already taken"
                });
            }
        // Perform signup logic (e.g., create user in database)
        res.status(201).json({
            message: "User registered successfully",
            user: {
                username,
                email
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error registering user",
            error: error.message
        });
    }
const existingEmail = await User.findOne({email});
            if (existingEmail) {
                return res.status(400).json({
                    message: "Email already in use"
                });
            }



};




export const login = (req, res) => {
    res.json({
        data: "Login endpoint"
    });
};

e












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
