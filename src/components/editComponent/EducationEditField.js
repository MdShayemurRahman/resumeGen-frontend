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
  IconButton,
  Tooltip,
  Fade,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SchoolIcon from '@mui/icons-material/School';

const EducationCard = ({ edu, index, onChange, onRemove, isSmallScreen }) => (
  <Box
    sx={{
      mb: { xs: 3, sm: 4 },
      position: 'relative',
      '&:not(:last-child)': {
        borderBottom: '1px solid',
        borderColor: 'divider',
        pb: { xs: 2, sm: 3 },
      },
      '&:hover': {
        '& .delete-button': {
          opacity: 1,
        },
      },
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 2,
        gap: 1,
      }}
    >
      <SchoolIcon color='primary' />
      <Typography
        variant='subtitle1'
        sx={{
          fontWeight: 500,
          color: 'text.primary',
        }}
      >
        Education #{index + 1}
      </Typography>
      {!isSmallScreen && (
        <Tooltip title='Remove Education' arrow>
          <IconButton
            onClick={() => onRemove(index)}
            color='error'
            size='small'
            className='delete-button'
            sx={{
              ml: 'auto',
              opacity: 0,
              transition: 'opacity 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'error.lighter',
              },
            }}
          >
            <DeleteIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      )}
    </Box>

    <Grid
      container
      spacing={2}
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
          onChange={(e) => onChange(e, index, 'education', 'institution')}
          variant='outlined'
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='Enter institution name'
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
          placeholder='e.g., Bachelor of Science'
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Start Year'
          value={edu.startYear}
          onChange={(e) => onChange(e, index, 'education', 'startYear')}
          variant='outlined'
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='YYYY'
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
          placeholder='YYYY or Present'
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
          placeholder='e.g., 3.8 GPA or First Class Honours'
        />
      </Grid>

      {isSmallScreen && (
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}
        >
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
        </Grid>
      )}
    </Grid>
  </Box>
);

export const EducationField = ({ education, onChange, onRemove, onAdd }) => {
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
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: { xs: 2, sm: 2.5, md: 3 },
              borderBottom: '2px solid',
              borderColor: 'primary.light',
              pb: 1,
            }}
          >
            <Typography
              variant={isSmallScreen ? 'subtitle1' : 'h6'}
              sx={{
                fontWeight: 600,
                color: 'primary.main',
              }}
            >
              Education
            </Typography>

            <Button
              variant={isSmallScreen ? 'outlined' : 'contained'}
              color='primary'
              onClick={onAdd}
              startIcon={<AddIcon />}
              size={isSmallScreen ? 'small' : 'medium'}
              sx={{
                textTransform: 'none',
                borderRadius: '20px',
                px: isSmallScreen ? 2 : 3,
              }}
            >
              {isSmallScreen ? 'Add' : 'Add Education'}
            </Button>
          </Box>

          {education.map((edu, index) => (
            <Fade in={true} key={index}>
              <div>
                <EducationCard
                  edu={edu}
                  index={index}
                  onChange={onChange}
                  onRemove={onRemove}
                  isSmallScreen={isSmallScreen}
                />
              </div>
            </Fade>
          ))}

          {education.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
              <SchoolIcon sx={{ fontSize: 40, mb: 1, opacity: 0.5 }} />
              <Typography variant='body2'>
                No education entries yet. Click the button above to add your
                educational background.
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Grid>
  );
};
