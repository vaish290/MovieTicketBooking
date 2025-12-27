import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./ingest/index.js";


const app=express();
const port=3000;

await connectDB()

//Middleware
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

//API Routes
app.get("/",(req,res)=>{
    res.send("server is live")
})

//api endpoint for this ingest
app.use('/api/ingest',serve({ client: inngest, functions }))
app.listen(port,()=>console.log(`Server is running on port ${port}`));