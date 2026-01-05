import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongourl = process.env.MONGO_URL;

export const connectDb = async(req, res)=>{
    try {
        await mongoose.connect(mongourl);
        console.log("connected to database")
    } catch (error) {
        console.log("Db error", error)
    }
};

