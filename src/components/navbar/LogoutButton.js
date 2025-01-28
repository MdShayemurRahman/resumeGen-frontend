import React from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = ({ onLogout }) => {
  return (
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
  );
};

export default LogoutButton;