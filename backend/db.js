import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// the DB config file that allow the data to be immgrated
const connectMongoDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MongoDB URI is undefined. Check your .env file.");

    await mongoose.connect(uri, {
     
    });
    console.log("Database connected successfully.");
  } catch (error) {
    console.error(" MongoDB connection error:", error);
  }
};

export default connectMongoDB;
