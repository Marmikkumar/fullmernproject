const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: './dot.env'});

require("./database/conn");

const app = express();

const PORT= process.env.PORT;

app.use(express.json());
app.use(require("./Router/auth"));


app.listen(process.env.PORT,()=>{
    console.log("server is running on port ",`${PORT}`);
})

