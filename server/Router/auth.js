const express= require("express");
const router = express.Router();

const User= require("../Model/users");

const middleware= (req,res,next) =>{
    console.log("hello my middleware");
    next();
}

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
                return res.status(404).json({error: "email already exist"})
            }
        
            const user = new User({name,email,phone,work,password,cpassword});

            user.save().then(()=>{
                return res.status(202).json({message: "register successful"})
            }).catch((err)=>{return res.status(501).json({error: "failed to register"})})
        }).catch((err)=>{console.log(err)})
    
})

router.get('/about',middleware,(req,res)=>{
    res.send("hello to about page");
})


module.exports = router;

