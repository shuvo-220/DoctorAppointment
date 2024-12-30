const express = require('express');
const { 
    register, 
    doctorRegister, 
    login, 
    getUserDetails,
    getDoctorDetails,
} = require('../controllers/userController');
const { auth } = require('../middleware/auth');
const { 
    userAppointment,
    appointment,
    doctorAppointment
 } = require('../controllers/appointmentController');
const router = express.Router();

router.post('/register', register);
router.post('/docRegister', doctorRegister);
router.post('/login', login);
router.get('/me',auth, getUserDetails);
router.get('/appointment/me', auth, userAppointment)
router.post('/appointment', auth, appointment);
router.get('/doctor/appointment', auth, doctorAppointment)
router.get('/doctor/me', auth, getDoctorDetails);
// router.get('/users', getAllUsers);

module.exports = router;