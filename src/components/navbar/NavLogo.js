import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavLogo = () => {
  const navigate = useNavigate();

  return (
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
  );
};

export default NavLogo;