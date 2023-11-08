const jwt = require("jsonwebtoken");
const User = require("../Model/users");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    if (!token) {
      return res.status(401).send("Unauthorized: No token provided");
    }

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

    if (!rootUser) {
      return res.status(401).send("Unauthorized: Invalid token");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).send("Unauthorized: Invalid token");
  }
};

module.exports = authenticate;
