const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config({path: './dot.env'});

require("./database/conn");

const app = express();

const PORT= process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(require("./Router/auth"));


app.listen(process.env.PORT,()=>{
    console.log("server is running on port ",`${PORT}`);
})

