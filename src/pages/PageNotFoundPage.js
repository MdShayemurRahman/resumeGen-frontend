import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PageNotFoundContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const ErrorCode = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  marginBottom: theme.spacing(4),
}));

const GoHomeButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  fontSize: '1.2rem',
}));

export const PageNotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <PageNotFoundContainer>
      <ErrorCode variant='h1'>404</ErrorCode>
      <ErrorMessage variant='h4'>Oops! Page not found</ErrorMessage>
      <GoHomeButton variant='contained' color='primary' onClick={handleGoHome}>
        Go Home
      </GoHomeButton>
    </PageNotFoundContainer>
  );
};
