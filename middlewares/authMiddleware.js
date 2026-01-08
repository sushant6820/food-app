import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

export const protect = async(req, res, next)=>{
    try {
        const token = req.headers["authorization"].split(" ")[1];
        
        jwt.verify(token, jwt_secret, (err, decoded)=>{
            if (err){
                return res.status(401).send({
                    success: false,
                    message : "unauthorized User"
                })
            } else {
                req.user = decoded;
         
                next()
            }
        })

    } catch (error) {
        console.log("error");
        res.status(500).json({
            success : false,
            message : "Please provide Auth token",
            error
        })
    }
}