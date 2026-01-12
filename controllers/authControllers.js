import User from "../models/userModel.js";

import bcrypt from "bcryptjs"
import dotenv from "dotenv";
import jwt from "jsonwebtoken"

dotenv.config();

const jwt_secret = process.env.JWT_SECRET;



export const registerController = async(req, res)=>{
    try {
        const {userName, email, password, address, phone, answer} = req.body;

        if (!userName || !email || !password || !address || !phone || !answer){
            return res.status(400).json({success: false, message : "please proide all fields"})
        }
        
        const existingUser = await User.findOne({email});

        if (existingUser){
            return res.status(409).json({success: false, message : "Email already registered please login"})
        }

        const hashedPassword =await bcrypt.hash(password,10)

        const user = new User({userName, email, password : hashedPassword, address, phone, answer});

        await user.save();

        return res.status(200).json({
            success : true,
            message : "user registered successfully",
            user
        })

    } catch (error) {
        console.log("Login error : ", error);

        return res.status(500).json({success: false, message: "error in register API"})
    }
}

export const loginController = async(req, res)=>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message : "please provide email or password"
            })
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                success : false,
                message : "user not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(500).json({
                success : false,
                message : "invalid credentials"
            })
        }

        const token = jwt.sign({id: user._id}, jwt_secret)

        user.password = undefined;
        return res.status(200).json({
            success: true,
            message : "Login successfull",
            token,
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message : "error in login api"
        })
    }
}