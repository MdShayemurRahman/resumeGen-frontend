import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const ExperienceField = ({
  experience,
  onChange,
  onRemove,
  onAdd,
  isMobile,
}) => (
  <Grid item xs={12}>
    <Paper elevation={isMobile ? 1 : 3}>
      <Box p={{ xs: 2, sm: 3 }}>
        <Typography
          variant={isMobile ? 'subtitle1' : 'h6'}
          sx={{
            mb: 2,
            fontWeight: 600,
            color: 'primary.main',
          }}
        >
          Work Experience
        </Typography>

        {experience.map((exp, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Job Title'
                  value={exp.title}
                  onChange={(e) => onChange(e, index, 'experience', 'title')}
                  size={isMobile ? 'small' : 'medium'}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Company'
                  value={exp.company}
                  onChange={(e) => onChange(e, index, 'experience', 'company')}
                  size={isMobile ? 'small' : 'medium'}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Location'
                  value={exp.location}
                  onChange={(e) => onChange(e, index, 'experience', 'location')}
                  size={isMobile ? 'small' : 'medium'}
                  placeholder='e.g., Helsinki, Finland'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Start Date'
                  value={exp.startDate}
                  onChange={(e) =>
                    onChange(e, index, 'experience', 'startDate')
                  }
                  size={isMobile ? 'small' : 'medium'}
                  placeholder='e.g., May 2023'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='End Date'
                  value={exp.endDate}
                  onChange={(e) => onChange(e, index, 'experience', 'endDate')}
                  size={isMobile ? 'small' : 'medium'}
                  placeholder='e.g., Present'
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Description'
                  value={exp.description}
                  onChange={(e) =>
                    onChange(e, index, 'experience', 'description')
                  }
                  multiline
                  rows={4}
                  size={isMobile ? 'small' : 'medium'}
                  placeholder='Describe your responsibilities and achievements'
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {isMobile ? (
                    <IconButton
                      onClick={() => onRemove(index)}
                      color='error'
                      sx={{
                        border: '1px solid',
                        borderColor: 'error.main',
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  ) : (
                    <Button
                      variant='outlined'
                      color='error'
                      onClick={() => onRemove(index)}
                      startIcon={<DeleteIcon />}
                      sx={{
                        mt: 1,
                        textTransform: 'none',
                      }}
                    >
                      Remove
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}

        <Box sx={{ mt: 2 }}>
          <Button
            variant='contained'
            color='primary'
            onClick={onAdd}
            startIcon={<AddIcon />}
            size={isMobile ? 'small' : 'medium'}
            sx={{ textTransform: 'none' }}
          >
            Add Experience
          </Button>
        </Box>
      </Box>
    </Paper>
  </Grid>
);
