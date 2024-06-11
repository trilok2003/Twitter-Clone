import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config({
    path:".env"
})

app.listen(process.env.PORT,()=>{
    console.log(`Server listen at port: ${process.env.PORT}`);
})