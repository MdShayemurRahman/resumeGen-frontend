// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const Navbar = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/logout',
        null,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        console.log('Logged out successfully');
      }

      // Redirect to login page or update the UI to reflect the logged-out state
      window.location.href = '/login';
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
