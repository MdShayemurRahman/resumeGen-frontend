import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Fade,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';

import { useForm } from '../../Hooks/useForm';
import { validateForm } from '../../utils/validateForm';
import { PersonalInfoField } from './PersonalInfoEditField';
import { SkillField } from './SkillEditField';
import { EducationField } from './EducationEditField';
import { ProjectField } from './ProjectEditField';
import { ExperienceField } from './ExperienceEditField';
import { LanguageField } from './LanguageField';
import { CertificationField } from './CertificationField';

const INITIAL_FIELDS = {
  education: {
    institution: '',
    degree: '',
    startYear: '',
    endYear: '',
    grade: '',
  },
  projects: {
    title: '',
    description: '',
    link: '',
  },
  experience: {
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
  },
  languages: {
    name: '',
    level: '',
  },
  certifications: {
    name: '',
    issuer: '',
    date: '',
  },
};

export const EditResume = ({ profileData, onSave, isLoading }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [saveStatus, setSaveStatus] = useState({
    open: false,
    message: '',
    type: 'success',
  });

  const initialFormData = {
    ...profileData,
    skills: profileData?.skills || [],
    education: profileData?.education || [INITIAL_FIELDS.education],
    projects: profileData?.projects || [INITIAL_FIELDS.projects],
    experience: profileData?.experience || [INITIAL_FIELDS.experience],
    languages: profileData?.languages || [INITIAL_FIELDS.languages],
    certifications: profileData?.certifications || [
      INITIAL_FIELDS.certifications,
    ],
  };

  const [
    formData,
    setFormData,
    handleChange,
    handleAddField,
    handleRemoveField,
  ] = useForm(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission triggered'); // Debug log

    // Validate form
    const errors = validateForm(formData);
    if (errors.length > 0) {
      console.log('Validation errors:', errors); // Debug log
      setSaveStatus({
        open: true,
        message: errors.join('\n'),
        type: 'error',
      });
      return;
    }

    try {
      console.log('Calling onSave with formData:', formData); // Debug log
      await onSave(formData);

      setSaveStatus({
        open: true,
        message: 'Profile updated successfully!',
        type: 'success',
      });
    } catch (error) {
      console.error('Save error:', error);
      setSaveStatus({
        open: true,
        message: error.message || 'Failed to update profile. Please try again.',
        type: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSaveStatus((prev) => ({ ...prev, open: false }));
  };

  const sections = [
    {
      Component: PersonalInfoField,
      props: { formData, setFormData, isSmallScreen },
    },
    {
      Component: SkillField,
      props: {
        skills: formData.skills,
        onChange: handleChange,
        onRemove: (index) => handleRemoveField('skills', index),
        onAdd: () => handleAddField('skills', ''),
        isSmallScreen,
      },
    },
    {
      Component: ExperienceField,
      props: {
        experience: formData.experience,
        onChange: handleChange,
        onRemove: (index) => handleRemoveField('experience', index),
        onAdd: () => handleAddField('experience', INITIAL_FIELDS.experience),
        isSmallScreen,
      },
    },
    {
      Component: EducationField,
      props: {
        education: formData.education,
        onChange: handleChange,
        onRemove: (index) => handleRemoveField('education', index),
        onAdd: () => handleAddField('education', INITIAL_FIELDS.education),
        isSmallScreen,
      },
    },
    {
      Component: ProjectField,
      props: {
        projects: formData.projects,
        onChange: handleChange,
        onRemove: (index) => handleRemoveField('projects', index),
        onAdd: () => handleAddField('projects', INITIAL_FIELDS.projects),
        isSmallScreen,
      },
    },
    {
      Component: LanguageField,
      props: {
        languages: formData.languages,
        onChange: handleChange,
        onRemove: (index) => handleRemoveField('languages', index),
        onAdd: () => handleAddField('languages', INITIAL_FIELDS.languages),
        isSmallScreen,
      },
    },
    {
      Component: CertificationField,
      props: {
        certifications: formData.certifications,
        onChange: handleChange,
        onRemove: (index) => handleRemoveField('certifications', index),
        onAdd: () =>
          handleAddField('certifications', INITIAL_FIELDS.certifications),
        isSmallScreen,
      },
    },
  ];

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          p: { xs: 2, sm: 2.5, md: 3 },
          borderBottom: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          bgcolor: 'background.paper',
        }}
      >
        <EditIcon color='primary' />
        <Typography
          variant={isSmallScreen ? 'h6' : 'h5'}
          sx={{
            fontWeight: 600,
            color: 'primary.main',
          }}
        >
          Edit Resume
        </Typography>
      </Box>

      <Box
        component='form'
        onSubmit={handleSubmit}
        noValidate
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: { xs: 2, sm: 2.5, md: 3 },
            bgcolor: 'grey.50',
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              maxWidth: '100%',
              margin: '0 auto',
            }}
          >
            {sections.map((Section, index) => (
              <Fade in={true} key={index} timeout={300 + index * 100}>
                <Grid item xs={12}>
                  <Section.Component {...Section.props} />
                </Grid>
              </Fade>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            borderTop: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant='contained'
            color='primary'
            type='submit'
            disabled={isLoading}
            startIcon={!isLoading && <SaveIcon />}
            sx={{
              minWidth: '160px',
              textTransform: 'none',
              borderRadius: '20px',
              px: 4,
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            {isLoading ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CircularProgress size={16} color='inherit' />
                Saving...
              </Box>
            ) : (
              'Save Changes'
            )}
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={saveStatus.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={saveStatus.type}
          variant='filled'
          elevation={6}
          sx={{
            width: '100%',
            '& .MuiAlert-message': {
              fontSize: '0.9rem',
            },
          }}
        >
          {saveStatus.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};
