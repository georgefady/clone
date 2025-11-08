
import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from  './db.js'; 

import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();



//console.log("Starting server...");
//console.log("Connecting to database...");
console.log("Database connected successfully.");
//console.log("Server setup complete.");



// server middleware used to parse the applicatin  and have to be in the middle of the server
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use("/api/auth", authRoutes);
                        
 // the server port for testing api                                                                                       
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});
// dotweb team leader
//george fady
