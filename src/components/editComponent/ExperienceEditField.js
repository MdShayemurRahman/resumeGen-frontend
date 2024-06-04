import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

export const ExperienceField = ({ experience, onChange, onRemove, onAdd }) => (
  <>
    <Typography variant='h6' sx={{ mt: 3, mb: 2 }}>
      Experience
    </Typography>
    {experience.map((exp, index) => (
      <Box key={index} mb={2}>
        <TextField
          fullWidth
          label='Title'
          value={exp.title}
          onChange={(e) => onChange(e, index, 'experience', 'title')}
          sx={{ marginBottom: 1 }}
        />
        <TextField
          fullWidth
          label='Company'
          value={exp.company}
          onChange={(e) => onChange(e, index, 'experience', 'company')}
          sx={{ marginBottom: 1 }}
        />
        <TextField
          fullWidth
          label='Description'
          value={exp.description}
          onChange={(e) => onChange(e, index, 'experience', 'description')}
          multiline
          rows={4}
          sx={{ marginBottom: 1 }}
        />
        <Button
          variant='outlined'
          color='secondary'
          onClick={() => onRemove(index)}
        >
          Remove
        </Button>
      </Box>
    ))}
    <Button variant='contained' color='primary' onClick={onAdd}>
      Add Experience
    </Button>
  </>
);
