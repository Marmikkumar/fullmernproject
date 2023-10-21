const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },
    
    work:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    cpassword:{
        type:String,
        required:true
    }
})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        // var salt= bcrypt.genSaltSync(12);
        this.password= await bcrypt.hashSync(this.password,12);
        this.cpassword= await bcrypt.hashSync(this.cpassword,12);
    }
    next();
})

const User = mongoose.model('User',userSchema);

module.exports = User;