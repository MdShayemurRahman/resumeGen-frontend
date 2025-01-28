import React from 'react';
import { Box, Grid } from '@mui/material';

import ResumeHeader from './ResumeHeader';
import ContactInfo from './ContactInfo';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import CertificationsSection from './CertificationsSection';
import LanguagesSection from './LanguagesSection';

const Resume = ({ profileData }) => {
  return (
    <Box
      sx={{
        width: '210mm',
        height: '297mm',
        bgcolor: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
      }}
    >
      <ResumeHeader
        user={profileData.user}
        headline={profileData.headline}
        summary={profileData.summary}
      />

      <ContactInfo
        email={profileData.user.email}
        phone={profileData.phone}
        githubURL={profileData.githubURL}
        linkedinURL={profileData.user.linkedinURL}
      />

      <Grid container sx={{ p: 4 }} spacing={4}>
        {/* Left Column */}
        <Grid item xs={7}>
          <ExperienceSection experiences={profileData.experience} />
          <ProjectsSection projects={profileData.projects} />
        </Grid>

        {/* Right Column */}
        <Grid item xs={5}>
          <SkillsSection skills={profileData.skills} />
          <EducationSection education={profileData.education} />
          <CertificationsSection certifications={profileData.certifications} />
          <LanguagesSection languages={profileData.languages} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
