import React from 'react';
import { Typography, TextField, Button, Grid, Box, Paper } from '@mui/material';

export const EducationField = ({ education, onChange, onRemove, onAdd }) => (
  <Grid item xs={12}>
    <Paper elevation={3}>
      <Box p={3}>
        <Typography variant='h6' sx={{ mb: 3 }}>
          Education
        </Typography>
        {education.map((edu, index) => (
          <Box key={index} mb={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Institution'
                  value={edu.institution}
                  onChange={(e) =>
                    onChange(e, index, 'education', 'institution')
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Degree'
                  value={edu.degree}
                  onChange={(e) => onChange(e, index, 'education', 'degree')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Start Year'
                  value={edu.startYear}
                  onChange={(e) => onChange(e, index, 'education', 'startYear')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='End Year'
                  value={edu.endYear}
                  onChange={(e) => onChange(e, index, 'education', 'endYear')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Grade'
                  value={edu.grade}
                  onChange={(e) => onChange(e, index, 'education', 'grade')}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='outlined'
                  color='secondary'
                  onClick={() => onRemove(index)}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
        <Box mt={2}>
          <Button variant='contained' color='primary' onClick={onAdd}>
            Add Education
          </Button>
        </Box>
      </Box>
    </Paper>
  </Grid>
);
