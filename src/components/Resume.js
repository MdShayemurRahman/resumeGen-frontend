import React from 'react';
import { Box, Divider, Typography, Grid } from '@mui/material';
import { UserProfileHeader } from './profileComponent/UserProfileHeader';
import { EducationList } from './profileComponent/EducationList';
import { ExperienceList } from './profileComponent/ExperienceList';
import { SkillList } from './profileComponent/SkillList';
import { ProjectList } from './profileComponent/ProjectList';

const Resume = ({ profileData }) => {
  return (
    <Box
      sx={{
        height: '297mm',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box sx={{ marginBottom: '2rem' }}>
        <UserProfileHeader profileData={profileData} />
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ marginBottom: '1rem', padding: '0 2rem' }}>
            <Typography variant='h6' gutterBottom>
              About Me
            </Typography>
            <Box mt={1}>
              <Divider style={{ backgroundColor: '#000' }} />
            </Box>
            <Box sx={{ margin: '1rem 0' }}>
              <Typography variant='body1' gutterBottom>
                {profileData.headline}
              </Typography>
            </Box>
          </Box>
        </Grid>
        {profileData.skills && profileData.skills.length > 0 && (
          <Grid item xs={12} sm={6}>
            <Box sx={{ marginBottom: '1rem', padding: '0 2rem' }}>
              <SkillList skills={profileData.skills} />
            </Box>
          </Grid>
        )}
        {profileData.experience && profileData.experience.length > 0 && (
          <Grid item xs={12} sm={6}>
            <Box sx={{ marginBottom: '1rem', padding: '0 2rem' }}>
              <ExperienceList experience={profileData.experience} />
            </Box>
          </Grid>
        )}
        {profileData.projects && profileData.projects.length > 0 && (
          <Grid item xs={12} sm={6}>
            <Box sx={{ marginBottom: '1rem', padding: '0 2rem' }}>
              <ProjectList projects={profileData.projects} />
            </Box>
          </Grid>
        )}
        {profileData.education && profileData.education.length > 0 && (
          <Grid item xs={12} sm={6}>
            <Box sx={{ marginBottom: '1rem', padding: '0 2rem' }}>
              <EducationList education={profileData.education} />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Resume;
