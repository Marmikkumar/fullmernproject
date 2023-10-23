const mongoose = require("mongoose");
const dotenv = require('dotenv');

const DB= process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection successful");
}).catch((err)=>console.log("no connection"));
