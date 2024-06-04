import React from 'react';
import { styled } from '@mui/material/styles';
import { CircularProgress, Typography } from '@mui/material';

const LoadingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const LoadingText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const LoadingComponent = () => {
  return (
    <LoadingContainer>
      <LoadingText variant='h5'>Loading...</LoadingText>
      <CircularProgress />
    </LoadingContainer>
  );
};

export default LoadingComponent;
