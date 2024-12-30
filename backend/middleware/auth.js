const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Doctor = require('../models/DoctorModel');

exports.auth=async(req, res, next)=>{
    const {token} = req.cookies
    if(!token){
        res.status(400).json('no token')
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    let user = await User.findById(decode.id)
    if(!user){
        user = await Doctor.findById(decode.id)
    }
    req.user = user
    next();
}


