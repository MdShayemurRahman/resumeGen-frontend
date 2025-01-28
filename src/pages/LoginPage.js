import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Container, Grid } from '@mui/material';
import config from '../config/config';

const LoginContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const LoginTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const LoginDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LoginButton = styled('button')(({ theme }) => ({
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
}));

const LoginButtonImage = styled('img')({
  width: '100%',
  height: 'auto',
});

const FeatureItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
}));

const FeatureIcon = styled('img')({
  width: 64,
  height: 64,
  marginBottom: 16,
});

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = config.LINKEDIN_AUTH_URL;
  };

  console.log(process.env.REACT_APP_API_URL);

  return (
    <LoginContainer maxWidth='md'>
      <Typography variant='h1'>Link2Resume</Typography>
      <LoginTitle variant='h2'>Create Your Perfect Resume</LoginTitle>
      <LoginDescription variant='body1'>
        Easily create a customizable resume using your LinkedIn profile. Login
        with LinkedIn to get started!
      </LoginDescription>

      <Box>
        <LoginButton onClick={handleLogin} aria-label='Sign in with LinkedIn'>
          <LoginButtonImage
            src='/signin_with_linkedin-buttons/Retina/Sign-In-Large---Default.png'
            alt='Sign in with LinkedIn'
          />
        </LoginButton>
      </Box>

      <Grid container spacing={4} justifyContent='center' sx={{ marginTop: 4 }}>
        <FeatureItem item xs={12} sm={6} md={4}>
          <FeatureIcon src='/icons/linkedin.png' alt='LinkedIn Integration' />
          <FeatureTitle variant='h6'>LinkedIn Integration</FeatureTitle>
          <FeatureDescription variant='body1'>
            Seamlessly import your LinkedIn profile information to populate your
            resume.
          </FeatureDescription>
        </FeatureItem>

        <FeatureItem item xs={12} sm={6} md={4}>
          <FeatureIcon src='/icons/resume.png' alt='Customization' />
          <FeatureTitle variant='h6'>Customization</FeatureTitle>
          <FeatureDescription variant='body1'>
            Customize your resume layout, sections, and styling to make it truly
            yours.
          </FeatureDescription>
        </FeatureItem>

        <FeatureItem item xs={12} sm={6} md={4}>
          <FeatureIcon src='/icons/save-as-pdf.png' alt='Download' />
          <FeatureTitle variant='h6'>Download</FeatureTitle>
          <FeatureDescription variant='body1'>
            Download your resume in various formats, ready to be shared with
            potential employers.
          </FeatureDescription>
        </FeatureItem>
      </Grid>
    </LoginContainer>
  );
};
