// src/components/employee/JobList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../redux/actions/authActions';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardHeader,
  CircularProgress 
} from '@mui/material';

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Available Jobs
      </Typography>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} md={6} key={job._id}>
            <Card>
              <CardHeader 
                title={job.jobTitle} 
                subheader={job.companyName} 
              />
              <CardContent>
                <Typography variant="body2">
                  {job.description}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Salary: ${job.salary.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobList;