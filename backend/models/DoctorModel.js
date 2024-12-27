const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const doctorSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String, default:'doctor'},
    bio:{type:String, required:true},
    specilization:{type:String, required:true},
    appointment:[{type:mongoose.Types.ObjectId, ref:'appointment'}]
})

doctorSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

module.exports = mongoose.model('Doctor', doctorSchema);