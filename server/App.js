const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const cookieParser= require("cookie-parser");

const app = express();

app.use(cookieParser);


dotenv.config({path: './dot.env'});

require("./database/conn");


const PORT= process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(require("./Router/auth"));


app.listen(process.env.PORT,()=>{
    console.log("server is running on port ",`${PORT}`);
})

