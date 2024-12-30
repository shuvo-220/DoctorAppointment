const Appointment = require('../models/appointments');


exports.appointment=async(req, res)=>{
    const{patientId, doctorId, fees, time, date} = req.body;

    try {
        const appointment = new Appointment({patientId, doctorId, fees, time, date})
        await appointment.save();
        res.status(200).json(appointment)
    } catch (error) {
        res.status(400).json(error.message);
    }
}


//get loggedin user appointment
exports.userAppointment=async(req, res)=>{
    const userAppointment = await Appointment.find({patientId:req.user.id}).populate('doctorId', 'name specilization')
    res.status(200).json(userAppointment)
}

exports.doctorAppointment = async(req, res)=>{
    const doctorAppointment = await Appointment.find({doctorId:req.user.id}).populate('patientId', 'name date time')
    res.status(200).json(doctorAppointment)
}