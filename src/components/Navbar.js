import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../services/api';

const Navbar = () => {
  const navigate = useNavigate();
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
      <AppBar position='static' sx={{ backgroundColor: 'primary.dark' }}>
        <Toolbar>
          <Typography
            variant='h5'
            component='div'
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/dashboard')}
          >
            Link2Resume
          </Typography>
          <Button
            color='inherit'
            onClick={onLogout}
            startIcon={<LogoutIcon />}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Error Snackbar */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseError}
          severity='error'
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Navbar;
