const express = require('express');
const router = express.Router();
const { createJob, getAllJobs } = require('../controllers/jobController');
const { authMiddleware, adminMiddleware, employeeMiddleware } = require('../middleware/authMiddleware');

router.post('/create', [authMiddleware, adminMiddleware], createJob);
router.get('/all', [authMiddleware, employeeMiddleware], getAllJobs);

module.exports = router;