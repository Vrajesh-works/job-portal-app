const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.get('/all', [authMiddleware, adminMiddleware], getAllUsers);

module.exports = router;