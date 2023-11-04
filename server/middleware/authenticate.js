const jwt = require("jsonwebtoken");
const User = require("../Model/users");

const authenticate = async( req,res,next)=>{
    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id : verifyToken._id , "tokens.token" : token});
        console.log(rootUser);
        if(!rootUser){
            throw new Error("user not found");
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    }
    catch(error){
        res.status(401).send("unauthorized:No token provided");
        console.log(error);
    }
    
}

module.exports = authenticate;