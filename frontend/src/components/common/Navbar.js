// src/components/common/Navbar.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box 
} from '@mui/material';
import { logout } from '../../redux/actions/authActions';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Job Portal
        </Typography>
        {isAuthenticated ? (
          <Box>
            {user && user.type === 'admin' && (
              <>
                <Button color="inherit" component={Link} to="/employees">
                  Employees
                </Button>
                <Button color="inherit" component={Link} to="/add-job">
                  Add Job
                </Button>
              </>
            )}
            {user && user.type === 'employee' && (
              <Button color="inherit" component={Link} to="/jobs">
                Jobs
              </Button>
            )}
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;