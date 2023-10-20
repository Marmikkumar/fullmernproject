const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const DB= "mongodb+srv://marmikkumar13:PXnBNZkuHSXRnKlB@merntable.nxchumz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("Connection successful");
}).catch((err)=>console.log("no connection"));

const middleware= (req,res,next) =>{
    console.log("hello my middleware");
    next;
}


app.get('/',(req,res)=>{
    res.send("hello to home page");
})

app.get('/about',middleware,(req,res)=>{
    res.send("hello to about page");
})

app.listen(3000,()=>{
    console.log("server is running on port ",`${port}`);
})
