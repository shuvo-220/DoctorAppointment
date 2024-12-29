const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.auth=async(req, res, next)=>{
    const {token} = req.cookies
    if(!token){
        res.status(400).json('no token')
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decode.id)
    next();
}


