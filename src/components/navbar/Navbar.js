import React, { useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';

import NavLogo from './NavLogo';
import LogoutButton from './LogoutButton';
import ErrorSnackbar from './ErrorSnackbar';
import { handleLogout } from '../../services/api';

const Navbar = () => {
  const [error, setError] = useState(null);

  const onLogout = async () => {
    try {
      await handleLogout();
      localStorage.clear();
    } catch (error) {
      console.error('Logout error:', error);
      setError('Failed to logout. Please try again.');
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'primary.dark',
          marginBottom: 2,
        }}
      >
        <Toolbar>
          <NavLogo />
          <LogoutButton onLogout={onLogout} />
        </Toolbar>
      </AppBar>

      <ErrorSnackbar error={error} onClose={handleCloseError} />
    </>
  );
};

export default Navbar;
