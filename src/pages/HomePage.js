import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, Container, Alert, Snackbar } from '@mui/material';

import Navbar from '../components/Navbar';
import Resume from '../components/resume/Resume';
import Settings from '../components/Settings';
import LoadingComponent from '../components/Loading';
import { fetchUserProfile, updateUserProfile } from '../services/api';
import { EditResume } from '../components/editComponent/EditResume';

const HomePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    type: 'success',
  });
  const componentRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchUserProfile(id);
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Failed to load profile. Please try again.');
        if (error.response?.status === 401) {
          navigate('/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, navigate]);

  const handleSaveProfile = async (formData) => {
    try {
      setIsLoading(true);
      await updateUserProfile(profileData.user._id.toString(), formData);
      const updatedProfileData = await fetchUserProfile(id);
      setProfileData(updatedProfileData);
      setNotification({
        open: true,
        message: 'Profile updated successfully',
        type: 'success',
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      setNotification({
        open: true,
        message: 'Failed to update profile',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  if (isLoading && !profileData) {
    return (
      <div>
        <Navbar />
        <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
          <LoadingComponent />
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
          <Alert severity='error'>{error}</Alert>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Container
        maxWidth={false}
        sx={{
          height: 'calc(100vh - 100px)',
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            height: '100%',
          }}
        >
          {/* Left Column - Settings */}
          <Grid
            item
            xs={12}
            md={2}
            lg={1}
            sx={{
              height: '100%',
            }}
          >
            <Settings componentRef={componentRef} />
          </Grid>

          {/* Middle Column - Resume */}
          <Grid
            item
            xs={12}
            md={5}
            lg={6}
            sx={{
              height: '100%',
              overflowY: 'auto',
            }}
          >
            {profileData ? (
              <div ref={componentRef}>
                <Resume profileData={profileData} />
              </div>
            ) : (
              <Typography variant='body1' align='center'>
                No profile data available
              </Typography>
            )}
          </Grid>

          {/* Right Column - Edit */}
          <Grid
            item
            xs={12}
            md={5}
            lg={5}
            sx={{
              height: '100%',
              overflowY: 'auto',
              borderLeft: '1px solid',
              borderColor: 'divider',
            }}
          >
            {profileData && (
              <EditResume
                profileData={profileData}
                onSave={handleSaveProfile}
                isLoading={isLoading}
              />
            )}
          </Grid>
        </Grid>

        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={handleCloseNotification}
        >
          <Alert
            onClose={handleCloseNotification}
            severity={notification.type}
            sx={{ width: '100%' }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

export default HomePage;
