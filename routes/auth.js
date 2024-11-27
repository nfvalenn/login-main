const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Rute login
router.post('/login', AuthController.login);

// Rute registrasi
router.post('/register', AuthController.register);

module.exports = router;
