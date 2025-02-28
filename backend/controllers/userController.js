const User = require('../models/userModel');
const Doctor = require('../models/DoctorModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async(req, res)=>{
    const{name,email,password,role} = req.body;

    try {
        const user = await User.findOne({email})
        if(user){
            res.status(400).json('user exist,please login')
        }
        const newUser = new User({name,email,password,role});
        await newUser.save();
        res.status(200).json({
            message:true,
            newUser
        })
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.doctorRegister = async(req, res)=>{
    const{name,email,password,role,bio,specilization} = req.body;
    try {
        const user = await Doctor.findOne({email});
        if(user){
            res.status(400).json('user exist, please login');
        }
        const newDoctor = new Doctor({name,email,password,role,bio,specilization});
        await newDoctor.save();
        res.status(200).json({
            success:true,
            newDoctor
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
}


exports.login = async(req, res)=>{
    const{email, password} = req.body;

    try {
        let user = null;

        const patient = await User.findOne({email});
        const doctor = await Doctor.findOne({email})
        if(patient){
            user = patient
        }
        if(doctor){
            user = doctor
        }

        if(!user){
            res.status(400).json('user not exist, please register first');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if(!isPasswordMatch){
            res.status(400).json('password not match');
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:'5d'
        })

        res.cookie('token', token);

        res.status(200).json({
            user,
            token
        })

    } catch (error) {
        res.status(500).json(error.message);
    }
}


exports.getUserDetails = async(req, res)=>{
    const user = await User.findById(req.user.id);
    if(!user){
        res.status(500).json('User not found');
    }
    res.status(200).json(user)
}


//loggedin doctor details
exports.getDoctorDetails = async(req, res)=>{
    const doctor = await Doctor.findById(req.user.id);
    if(!doctor){
        res.status(500).json('doctor not found');
    }
    res.status(200).json(doctor);
}