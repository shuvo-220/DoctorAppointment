const express = require('express');
const { 
    register, 
    doctorRegister, 
    login 
} = require('../controllers/userController');
const router = express.Router();

router.post('/register', register);
router.post('/docRegister', doctorRegister);
router.post('/login', login);

module.exports = router;