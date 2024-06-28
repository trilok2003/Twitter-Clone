import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRout.js"
import tweetRoute from "./routes/tweetRout.js"
const app = express();
dotenv.config({
    path:".env"
})
databaseConnection();

//moddelwares
app.use(express.urlencoded({
    extends:true
}));
app.use(express.json());
app.use(cookieParser());

//api 
app.use("/api/v1/user",userRoute)
app.use("/api/v1/tweet",tweetRoute)

// app.get("/home", (req,res)=>{
//     res.status(200).json({
//         message:"comming from backend..."
//     })
// })

app.listen(process.env.PORT,()=>{
    console.log(`Server listen at port: ${process.env.PORT}`);
})