import User from "../models/user.model";
export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }   
    } catch (error) {
        console.log("Error in protectRoute middleware:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }   
}