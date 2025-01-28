import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import config from '../config/config';

const LoginContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const LoginTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.75rem',
  },
}));

const LoginDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    padding: theme.spacing(0, 1),
    marginBottom: theme.spacing(3),
  },
}));

const LoginButton = styled('button')(({ theme }) => ({
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  padding: theme.spacing(1),
  maxWidth: '100%',
  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    opacity: 0.8,
  },
}));

const LoginButtonImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '250px',
  },
}));

const FeatureItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
  },
}));

const FeatureIcon = styled('img')(({ theme }) => ({
  width: 64,
  height: 64,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    width: 48,
    height: 48,
  },
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.25rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '2rem',
  },
}));

const LoginPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogin = () => {
    window.location.href = config.LINKEDIN_AUTH_URL;
  };

  return (
    <LoginContainer maxWidth='md'>
      <MainTitle variant='h1'>Link2Resume</MainTitle>
      <LoginTitle variant='h2'>Create Your Perfect Resume</LoginTitle>
      <LoginDescription variant='body1'>
        Easily create a customizable resume using your LinkedIn profile. Login
        with LinkedIn to get started!
      </LoginDescription>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <LoginButton onClick={handleLogin} aria-label='Sign in with LinkedIn'>
          <LoginButtonImage
            src='/signin_with_linkedin-buttons/Retina/Sign-In-Large---Default.png'
            alt='Sign in with LinkedIn'
          />
        </LoginButton>
      </Box>

      <Grid
        container
        spacing={isMobile ? 2 : 4}
        justifyContent='center'
        sx={{
          marginTop: isMobile ? 2 : 4,
          padding: isMobile ? 1 : 2,
        }}
      >
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

export default LoginPage;