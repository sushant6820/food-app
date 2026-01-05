import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes/testRoutes.js";
import { connectDb } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";


dotenv.config()

////DB connection
connectDb();

const app = express();
const port = process.env.PORT || 8000

///////////middleware
app.use(cors());
app.use(express.json())
app.use(morgan("dev"))

////////routes
app.use("/api/v1/test", router)
app.use("/api/v1/auth", authRouter)

app.get("/", (req,res)=>{
    return res.status(200).send("<h1>Welcome to food server APP API BASE PROJECT </h1>")
})

app.listen(port, ()=>{
    console.log(`the server is running on port number ${port}`)
})