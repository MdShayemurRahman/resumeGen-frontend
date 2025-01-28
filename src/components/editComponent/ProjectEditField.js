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
import WorkIcon from '@mui/icons-material/Work';
import LinkIcon from '@mui/icons-material/Link';

const ProjectCard = ({ project, index, onChange, onRemove, isSmallScreen }) => (
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
      <WorkIcon color='primary' />
      <Typography
        variant='subtitle1'
        sx={{
          fontWeight: 500,
          color: 'text.primary',
        }}
      >
        Project #{index + 1}
      </Typography>
      {!isSmallScreen && (
        <Tooltip title='Remove Project' arrow>
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
      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Project Title'
          value={project.title}
          onChange={(e) => onChange(e, index, 'projects', 'title')}
          variant='outlined'
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='Enter project name'
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Description'
          value={project.description}
          onChange={(e) => onChange(e, index, 'projects', 'description')}
          variant='outlined'
          size={isSmallScreen ? 'small' : 'medium'}
          multiline
          rows={3}
          placeholder='Describe your project, technologies used, and your role...'
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Project Link'
          value={project.link}
          onChange={(e) => onChange(e, index, 'projects', 'link')}
          variant='outlined'
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='https://...'
          InputProps={{
            startAdornment: (
              <LinkIcon sx={{ mr: 1, color: 'text.secondary' }} />
            ),
          }}
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

export const ProjectField = ({ projects, onChange, onRemove, onAdd }) => {
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
              Projects
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
              {isSmallScreen ? 'Add' : 'Add Project'}
            </Button>
          </Box>

          {projects.map((project, index) => (
            <Fade in={true} key={index}>
              <div>
                <ProjectCard
                  project={project}
                  index={index}
                  onChange={onChange}
                  onRemove={onRemove}
                  isSmallScreen={isSmallScreen}
                />
              </div>
            </Fade>
          ))}

          {projects.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
              <WorkIcon sx={{ fontSize: 40, mb: 1, opacity: 0.5 }} />
              <Typography variant='body2'>
                No projects added yet. Click the button above to showcase your
                work.
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Grid>
  );
};
