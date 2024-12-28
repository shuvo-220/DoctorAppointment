const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({
    patientId:{type:mongoose.Types.ObjectId, ref:"Patient"},
    doctorID:{type:mongoose.Types.ObjectId, ref:"Doctor"},
    date:{type:String},
    time:{type:String},
    status:{type:String, default:'pending'}
},{
    timestamps:true
});

module.exports = mongoose.model('Appointment', appointmentSchema);

