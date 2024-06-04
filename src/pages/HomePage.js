// HomePage.js
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, Container } from '@mui/material';
import { useReactToPrint } from 'react-to-print';

import Navbar from '../components/Navbar';
import Resume from '../components/Resume';
import Settings from '../components/Settings';
import { fetchUserProfile, updateUserProfile } from '../Api/api';
import { EditProfilePage } from './EditProfilePage';

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

  const handleGeneratePDF = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Resume',
    onAfterPrint: () => alert('PDF saved!'),
  });

  return (
    <>
      <Navbar />
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {isEditMode ? (
              <EditProfilePage
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
                Loading...
              </Typography>
            )}
          </Grid>
          {!isEditMode && (
            <Grid item xs={12} md={4}>
              <Settings
                onEditProfile={handleEditProfile}
                onGeneratePDF={handleGeneratePDF}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
