
import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from  './db.js'; 

import authRoutes from './routes/auth.routes.js';
dotenv.config();
const app = express();

app.use("/api/auth", authRoutes);

//console.log("Starting server...");
//console.log("Connecting to database...");
console.log("Database connected successfully.");
//console.log("Server setup complete.");




app.use(express.json()); // for parsing application/json




                                                        
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});