const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({
    patientId:{type:mongoose.Types.ObjectId, ref:"Patient"},
    doctorId:{type:mongoose.Types.ObjectId, ref:"Doctor"},
    fees:{type:Number},
    date:{type:String},
    time:{type:String},
    status:{type:String, default:'pending'}
},{
    timestamps:true
});

module.exports = mongoose.model('Appointment', appointmentSchema);

