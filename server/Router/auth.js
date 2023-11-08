const express= require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
// const cors = require('cors');
const jwt= require('jsonwebtoken');

const User= require("../Model/users");

// router.use(cors());

router.get('/',(req,res)=>{
    res.send("hello to home page");
})



router.post('/register',(req,res)=>{

    const {name,email,phone,work,password,cpassword}= req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(404).json({error: "filled appropriate data"});
    }

    User.findOne({email:email})
        .then((userExist)=>{
            if(userExist){
                return res.status(422).json({error: "email already exist"})
            }
        
            const user = new User({name,email,phone,work,password,cpassword});

            user.save().then(()=>{
                return res.status(202).json({message: "register successful"})
            }).catch((err)=>{return res.status(422).json({error: "failed to register"})})
        }).catch((err)=>{console.log(err)})
    
})



router.post('/Login', async (req,res)=>{
    const {email,password} = req.body;
    let token;

    if(!email || !password){
        return res.status(400).json("invalid details");
    }

    try{
        const loginexist = await User.findOne({email:email});
        
        if(loginexist){
            const match = await bcrypt.compare(password,loginexist.password);

            token= await loginexist.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
        
            if(match){
                return res.status(202).json("Login successful");
            }
        }
        return res.status(400).json("invalid email or password");

    }catch(err){
        res.status(400).json("invalid details");
        console.log(err);
    }


});

router.get('/about',authenticate ,(req,res)=>{
    console.log("hello to about page");
    console.log(rootUser);
    res.send(req.rootUser);
});

router.get('/contact',authenticate, (req,res)=>{
    console.log('hello to contact page');
    res.send(req.rootUser);
})


// router.get('/logout', (req,res)=>{
//     console.log('hello to our Logout page');
//     res.clearCookie('jwtoken', {path: '/'});
//     res.status(200).send('User logout');
// })


module.exports = router;

