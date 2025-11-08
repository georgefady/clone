import jwt from "jsonwebtoken";

export const generatetokenandcookie = (userId, res) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });

    res.cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development", // set to true in production
        
    });
};
/// dotweb team leader
/// george fady
