import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';

import { useForm } from '../Hooks/useForm';
import { validateForm } from '../utils/validateForm';
import {
  PersonalInfoField,
  ExperienceField,
  SkillField,
  EducationField,
  ProjectField,
} from './editComponent/index';

export const EditResume = ({ profileData, onSave, onCancel, isLoading }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const initialFormData = {
    ...profileData,
    skills: profileData.skills || [],
    education: profileData.education || [
      { institution: '', degree: '', startYear: '', endYear: '', grade: '' },
    ],
    projects: profileData.projects || [
      { title: '', description: '', link: '' },
    ],
    experience: profileData.experience || [
      { title: '', company: '', description: '' },
    ],
  };

  const [
    formData,
    setFormData,
    handleChange,
    handleAddField,
    handleRemoveField,
  ] = useForm(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    onSave(formData);
  };

  return (
    <Container
      maxWidth='lg'
      sx={{
        width: '100%',
        minHeight: '100vh',
        padding: {
          xs: '1rem',
          sm: '1.5rem',
          md: '2rem',
        },
        '@media print': {
          padding: 0,
        },
      }}
    >
      <Paper
        elevation={isMobile ? 0 : 2}
        sx={{
          padding: {
            xs: '1rem',
            sm: '1.5rem',
            md: '2rem',
          },
          backgroundColor: 'background.paper',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            mt: { xs: 2, sm: 3, md: 4 },
            mb: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            align='center'
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'primary.main',
            }}
          >
            Edit Profile
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            sx={{
              '& .MuiGrid-item': {
                width: '100%',
              },
            }}
          >
            <PersonalInfoField
              formData={formData}
              setFormData={setFormData}
              isMobile={isMobile}
            />

            <SkillField
              skills={formData.skills}
              onChange={handleChange}
              onRemove={(index) => handleRemoveField('skills', index)}
              onAdd={() => handleAddField('skills', '')}
              isMobile={isMobile}
            />

            <EducationField
              education={formData.education}
              onChange={handleChange}
              onRemove={(index) => handleRemoveField('education', index)}
              onAdd={() =>
                handleAddField('education', {
                  institution: '',
                  degree: '',
                  startYear: '',
                  endYear: '',
                  grade: '',
                })
              }
              isMobile={isMobile}
            />

            <ProjectField
              projects={formData.projects}
              onChange={handleChange}
              onRemove={(index) => handleRemoveField('projects', index)}
              onAdd={() =>
                handleAddField('projects', {
                  title: '',
                  description: '',
                  link: '',
                })
              }
              isMobile={isMobile}
            />

            <ExperienceField
              experience={formData.experience}
              onChange={handleChange}
              onRemove={(index) => handleRemoveField('experience', index)}
              onAdd={() =>
                handleAddField('experience', {
                  title: '',
                  company: '',
                  description: '',
                })
              }
              isMobile={isMobile}
            />

            <Grid item xs={12}>
              <Box
                sx={{
                  mt: { xs: 2, sm: 3, md: 4 },
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: 'center',
                  gap: { xs: 1, sm: 2 },
                }}
              >
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  size={isMobile ? 'medium' : 'large'}
                  disabled={isLoading}
                  fullWidth={isMobile}
                  sx={{
                    minWidth: { sm: '150px' },
                    textTransform: 'none',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                  }}
                >
                  {isLoading ? 'Saving...' : 'Save'}
                </Button>
                <Button
                  variant='outlined'
                  color='secondary'
                  onClick={onCancel}
                  size={isMobile ? 'medium' : 'large'}
                  disabled={isLoading}
                  fullWidth={isMobile}
                  sx={{
                    minWidth: { sm: '150px' },
                    textTransform: 'none',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
