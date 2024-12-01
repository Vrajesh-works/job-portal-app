import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createJob } from '../../redux/actions/authActions';
import { 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Paper 
} from '@mui/material';

const AddJob = ({ history }) => {
  const [jobData, setJobData] = useState({
    companyName: '',
    jobTitle: '',
    description: '',
    salary: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setJobData({ 
      ...jobData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createJob(jobData));
      history.push('/jobs');
    } catch (error) {
      console.error('Job creation failed', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 8 }}>
        <Typography component="h1" variant="h5">
          Add New Job
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Company Name"
            name="companyName"
            value={jobData.companyName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Job Title"
            name="jobTitle"
            value={jobData.jobTitle}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Job Description"
            name="description"
            multiline
            rows={4}
            value={jobData.description}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Salary"
            name="salary"
            type="number"
            value={jobData.salary}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Job
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddJob;