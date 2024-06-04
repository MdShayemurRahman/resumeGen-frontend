import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

export const ProjectField = ({ projects, onChange, onRemove, onAdd }) => (
  <>
    <Typography variant='h6' sx={{ mt: 3, mb: 2 }}>
      Projects
    </Typography>
    {projects.map((project, index) => (
      <Box key={index} mb={2}>
        <TextField
          fullWidth
          label='Title'
          value={project.title}
          onChange={(e) => onChange(e, index, 'projects', 'title')}
          sx={{ marginBottom: 1 }}
        />
        <TextField
          fullWidth
          label='Description'
          value={project.description}
          onChange={(e) => onChange(e, index, 'projects', 'description')}
          multiline
          rows={4}
          sx={{ marginBottom: 1 }}
        />
        <TextField
          fullWidth
          label='Link'
          value={project.link}
          onChange={(e) => onChange(e, index, 'projects', 'link')}
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
      Add Project
    </Button>
  </>
);
