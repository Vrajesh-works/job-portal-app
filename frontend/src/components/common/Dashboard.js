// src/components/common/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Container, 
  Typography, 
  Box, 
  Paper 
} from '@mui/material';

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            Welcome, {user ? user.fullName : 'User'}!
          </Typography>
          <Typography variant="body1">
            {user && user.type === 'admin' 
              ? 'You have admin access to manage employees and jobs.' 
              : 'You can view available jobs in the Jobs section.'}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;