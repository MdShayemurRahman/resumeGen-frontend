import React from 'react';
import { Container, Grid, Typography, Button, Paper, Box } from '@mui/material';
import { useForm } from '../Hooks/useForm';
import { PersonalInfo } from '../components/editComponent/PersonalInfo';
import { SkillField } from '../components/editComponent/SkillEditField';
import { EducationField } from '../components/editComponent/EducationEditField';
import { ExperienceField } from '../components/editComponent/ExperienceEditField';
import { ProjectField } from '../components/editComponent/ProjectEditField';
import { validateForm } from '../utils/validateForm';

export const EditProfilePage = ({ profileData, onSave, onCancel }) => {
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
    <Container maxWidth='md'>
      <Box mt={4} mb={4}>
        <Typography variant='h4' align='center' gutterBottom>
          Edit Profile
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box p={3}>
                <Typography variant='h6' gutterBottom>
                  Personal Information
                </Typography>
                <PersonalInfo formData={formData} setFormData={setFormData} />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box p={3}> 
                <Typography variant='h6' gutterBottom>
                  Skills
                </Typography>
                <SkillField
                  skills={formData.skills}
                  onChange={handleChange}
                  onRemove={(index) => handleRemoveField('skills', index)}
                  onAdd={() => handleAddField('skills', '')}
                />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box p={3}>
                <Typography variant='h6' gutterBottom>
                  Education
                </Typography>
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
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box p={3}>
                <Typography variant='h6' gutterBottom>
                  Projects
                </Typography>
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
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box p={3}>
                <Typography variant='h6' gutterBottom>
                  Experience
                </Typography>
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
              </Box>
            </Paper>
          </Grid>

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
