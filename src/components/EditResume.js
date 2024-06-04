import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';

import { useForm } from '../Hooks/useForm';
import { validateForm } from '../utils/validateForm';
import {
  PersonalInfoField,
  ExperienceField,
  SkillField,
  EducationField,
  ProjectField,
} from './editComponent/index';

export const EditResume = ({ profileData, onSave, onCancel }) => {
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
      sx={{
        width: '100%',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Box mt={4} mb={4}>
        <Typography variant='h4' align='center' gutterBottom>
          Edit Profile
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <PersonalInfoField formData={formData} setFormData={setFormData} />

          <SkillField
            skills={formData.skills}
            onChange={handleChange}
            onRemove={(index) => handleRemoveField('skills', index)}
            onAdd={() => handleAddField('skills', '')}
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
          />

          <Grid item xs={12}>
            <Box mt={4} display='flex' justifyContent='center'>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                size='large'
              >
                Save
              </Button>
              <Box ml={2}>
                <Button
                  variant='outlined'
                  color='secondary'
                  onClick={onCancel}
                  size='large'
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
