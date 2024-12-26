import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express, { response } from "express";
const app = express();


app.use(cors());//we will give domain at production 

app.get("/", (req,res) => {
    res.send("hello world kalpesh");
});


export default app;
