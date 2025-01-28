import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  IconButton,
  Tooltip,
  Fade,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const ExperienceCard = ({ exp, index, onChange, onRemove, isSmallScreen }) => (
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
      <BusinessIcon color='primary' />
      <Typography
        variant='subtitle1'
        sx={{
          fontWeight: 500,
          color: 'text.primary',
        }}
      >
        Experience #{index + 1}
      </Typography>
      {!isSmallScreen && (
        <Tooltip title='Remove Experience' arrow>
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

    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Job Title'
          value={exp.title}
          onChange={(e) => onChange(e, index, 'experience', 'title')}
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='e.g., Senior Software Engineer'
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Company'
          value={exp.company}
          onChange={(e) => onChange(e, index, 'experience', 'company')}
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='e.g., Tech Solutions Inc.'
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Location'
          value={exp.location}
          onChange={(e) => onChange(e, index, 'experience', 'location')}
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='e.g., Helsinki, Finland'
          InputProps={{
            startAdornment: (
              <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
            ),
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Start Date'
          value={exp.startDate}
          onChange={(e) => onChange(e, index, 'experience', 'startDate')}
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='e.g., May 2023'
          InputProps={{
            startAdornment: (
              <CalendarTodayIcon sx={{ mr: 1, color: 'text.secondary' }} />
            ),
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='End Date'
          value={exp.endDate}
          onChange={(e) => onChange(e, index, 'experience', 'endDate')}
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='e.g., Present'
          InputProps={{
            startAdornment: (
              <CalendarTodayIcon sx={{ mr: 1, color: 'text.secondary' }} />
            ),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Description'
          value={exp.description}
          onChange={(e) => onChange(e, index, 'experience', 'description')}
          multiline
          rows={4}
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='• Led a team of 5 developers in developing a new feature
• Improved system performance by 40%
• Implemented CI/CD pipeline'
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

export const ExperienceField = ({ experience, onChange, onRemove, onAdd }) => {
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
              Work Experience
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
              {isSmallScreen ? 'Add' : 'Add Experience'}
            </Button>
          </Box>

          {experience.map((exp, index) => (
            <Fade in={true} key={index}>
              <div>
                <ExperienceCard
                  exp={exp}
                  index={index}
                  onChange={onChange}
                  onRemove={onRemove}
                  isSmallScreen={isSmallScreen}
                />
              </div>
            </Fade>
          ))}

          {experience.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
              <BusinessIcon sx={{ fontSize: 40, mb: 1, opacity: 0.5 }} />
              <Typography variant='body2'>
                No work experience added yet. Click the button above to add your
                professional experience.
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Grid>
  );
};
