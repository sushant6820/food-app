import User from "../models/userModel.js";


export const registerController = async(req, res)=>{
    try {
        const {userName, email, password, address, phone} = req.body;

        if (!userName || !email || !password || !address || !phone){
            return res.status(400).json({success: false, message : "please proide all fields"})
        }
        
        const existingUser = await User.findOne({email});

        if (existingUser){
            return res.status(409).json({success: false, message : "Email already registered please login"})
        }

        const user = new User({userName, email, password, address, phone});

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