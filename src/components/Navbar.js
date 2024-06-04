// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/logout',
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        console.log('Logged out successfully');
        navigate('/login');
      }
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: 'primary.dark' }}>
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1 }}>
          User Profile
        </Typography>
        <Button
          color='inherit'
          onClick={handleLogout}
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
