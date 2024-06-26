// HomePage.js
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, Container } from '@mui/material';

import Navbar from '../components/Navbar';
import Resume from '../components/Resume';
import Settings from '../components/Settings';
import LoadingComponent from '../components/Loading';
import { fetchUserProfile, updateUserProfile } from '../Api/api';
import { EditResume } from '../components/EditResume';

const HomePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserProfile(id);
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleEditProfile = async () => {
    try {
      const profileData = await fetchUserProfile(id);
      setProfileData(profileData);
      setIsEditMode(true);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleSaveProfile = async (formData) => {
    try {
      await updateUserProfile(profileData.user._id.toString(), formData);
      const updatedProfileData = await fetchUserProfile(id);
      setProfileData(updatedProfileData);
      setIsEditMode(false);
      navigate(`/profile/${profileData.user._id}`);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    navigate(`/profile/${id}`);
  };

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
              />
            ) : profileData ? (
              <div ref={componentRef}>
                <Resume profileData={profileData} />
              </div>
            ) : (
              <Typography variant='body1' align='center'>
                <LoadingComponent />
              </Typography>
            )}
          </Grid>
          {!isEditMode && (
            <Settings
              onEditProfile={handleEditProfile}
              // onGeneratePDF={handleGeneratePDF}
              componentRef={componentRef}
            />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
