const express = require('express');
const { 
    register, 
    doctorRegister, 
    login, 
    getUserDetails,
    getAllUsers
} = require('../controllers/userController');
const { auth } = require('../middleware/auth');
const router = express.Router();

router.post('/register', register);
router.post('/docRegister', doctorRegister);
router.post('/login', login);
router.get('/:id',auth, getUserDetails);
// router.get('/users', getAllUsers);

module.exports = router;