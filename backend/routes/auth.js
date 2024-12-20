const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registrazione
router.post('/login', authController.login);

// Login
router.post('/register', authController.register);

module.exports = router;
