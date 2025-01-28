import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, Container, Alert, Snackbar } from '@mui/material';

import Navbar from '../components/Navbar';
import Resume from '../components/Resume';
import Settings from '../components/Settings';
import LoadingComponent from '../components/Loading';
import { fetchUserProfile, updateUserProfile } from '../services/api';
import { EditResume } from '../components/EditResume';

const HomePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    type: 'success',
  });
  const componentRef = useRef();

  // Fetch profile data
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
        // If unauthorized, redirect to login
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

  const handleEditProfile = async () => {
    try {
      setIsLoading(true);
      const data = await fetchUserProfile(id);
      setProfileData(data);
      setIsEditMode(true);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setNotification({
        open: true,
        message: 'Failed to load profile for editing',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveProfile = async (formData) => {
    try {
      setIsLoading(true);
      await updateUserProfile(profileData.user._id.toString(), formData);
      const updatedProfileData = await fetchUserProfile(id);
      setProfileData(updatedProfileData);
      setIsEditMode(false);
      setNotification({
        open: true,
        message: 'Profile updated successfully',
        type: 'success',
      });
      navigate(`/profile/${profileData.user._id}`);
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

  const handleCancelEdit = () => {
    setIsEditMode(false);
    navigate(`/profile/${id}`);
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  if (isLoading && !profileData) {
    return (
      <>
        <Navbar />
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          <LoadingComponent />
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          <Alert severity='error'>{error}</Alert>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {isEditMode ? (
              <EditResume
                profileData={profileData}
                onSave={handleSaveProfile}
                onCancel={handleCancelEdit}
                isLoading={isLoading}
              />
            ) : profileData ? (
              <div ref={componentRef}>
                <Resume profileData={profileData} />
              </div>
            ) : (
              <Typography variant='body1' align='center'>
                No profile data available
              </Typography>
            )}
          </Grid>
          {!isEditMode && profileData && (
            <Settings
              onEditProfile={handleEditProfile}
              componentRef={componentRef}
            />
          )}
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
    </>
  );
};

export default HomePage;
