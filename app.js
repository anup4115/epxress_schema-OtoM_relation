import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./config/connectdb.js";
const app=express()
const port=process.env.PORT 
const DB_URL=process.env.DB_URL


connectDB(DB_URL)
// app.listen(port,()=>{
//     console.log(`Server at http://localhost:${port}`)
// })