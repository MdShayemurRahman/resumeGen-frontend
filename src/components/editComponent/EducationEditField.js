import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const EducationField = ({
  education,
  onChange,
  onRemove,
  onAdd,
  isMobile,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item xs={12}>
      <Paper
        elevation={isSmallScreen ? 1 : 3}
        sx={{
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: isSmallScreen ? 2 : 4,
          },
        }}
      >
        <Box
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            position: 'relative',
          }}
        >
          <Typography
            variant={isSmallScreen ? 'subtitle1' : 'h6'}
            sx={{
              mb: { xs: 2, sm: 2.5, md: 3 },
              fontWeight: 600,
              color: 'primary.main',
            }}
          >
            Education
          </Typography>

          {education.map((edu, index) => (
            <Box
              key={index}
              sx={{
                mb: { xs: 3, sm: 4 },
                position: 'relative',
                '&:not(:last-child)': {
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  pb: { xs: 2, sm: 3 },
                },
              }}
            >
              <Grid
                container
                spacing={{ xs: 1.5, sm: 2 }}
                sx={{
                  '& .MuiTextField-root': {
                    mb: { xs: 1.5, sm: 2 },
                  },
                }}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Institution'
                    value={edu.institution}
                    onChange={(e) =>
                      onChange(e, index, 'education', 'institution')
                    }
                    variant='outlined'
                    size={isSmallScreen ? 'small' : 'medium'}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'background.paper',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Degree'
                    value={edu.degree}
                    onChange={(e) => onChange(e, index, 'education', 'degree')}
                    variant='outlined'
                    size={isSmallScreen ? 'small' : 'medium'}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'background.paper',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Start Year'
                    value={edu.startYear}
                    onChange={(e) =>
                      onChange(e, index, 'education', 'startYear')
                    }
                    variant='outlined'
                    size={isSmallScreen ? 'small' : 'medium'}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'background.paper',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='End Year'
                    value={edu.endYear}
                    onChange={(e) => onChange(e, index, 'education', 'endYear')}
                    variant='outlined'
                    size={isSmallScreen ? 'small' : 'medium'}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'background.paper',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Grade'
                    value={edu.grade}
                    onChange={(e) => onChange(e, index, 'education', 'grade')}
                    variant='outlined'
                    size={isSmallScreen ? 'small' : 'medium'}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'background.paper',
                      },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: 'flex',
                    justifyContent: isSmallScreen ? 'center' : 'flex-start',
                    mt: { xs: 1, sm: 2 },
                  }}
                >
                  {isSmallScreen ? (
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
                        textTransform: 'none',
                        minWidth: '120px',
                      }}
                    >
                      Remove
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Box>
          ))}

          <Box
            sx={{
              mt: { xs: 2, sm: 3 },
              display: 'flex',
              justifyContent: isSmallScreen ? 'center' : 'flex-start',
            }}
          >
            {isSmallScreen ? (
              <IconButton
                onClick={onAdd}
                color='primary'
                sx={{
                  border: '1px solid',
                  borderColor: 'primary.main',
                }}
              >
                <AddIcon />
              </IconButton>
            ) : (
              <Button
                variant='contained'
                color='primary'
                onClick={onAdd}
                startIcon={<AddIcon />}
                sx={{
                  textTransform: 'none',
                  minWidth: '140px',
                }}
              >
                Add Education
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};
