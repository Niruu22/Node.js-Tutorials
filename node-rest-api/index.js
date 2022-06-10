const express = require("express");
const courseRouter = require("./routes/course");
const bodyparser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

// app.get("/",(req,res)=>{

//     res.send("Hello, your url is working ,the nodemon is working")
// });

app.use(bodyparser.json());
app.use("/api/course",courseRouter);


mongoose.connect(process.env.DB_CONNECTION_URL,()=>{
    console.log("Connected to db");
});

app.listen(process.env.PORT,()=>{
    console.log("Server is running......");
});