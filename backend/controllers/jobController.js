// backend/controllers/jobController.js
const Job = require('../models/Job');

// Create Job
exports.createJob = async (req, res) => {
  try {
    const { companyName, jobTitle, description, salary } = req.body;

    const job = new Job({
      companyName,
      jobTitle,
      description,
      salary,
      createdBy: req.user._id
    });

    await job.save();

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error: error.message });
  }
};

// Get All Jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('createdBy', 'fullName email');
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error: error.message });
  }
};
