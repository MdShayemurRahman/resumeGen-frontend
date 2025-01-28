import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  IconButton,
  Tooltip,
  Fade,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BusinessIcon from '@mui/icons-material/Business';

const CertificationCard = ({
  cert,
  index,
  onChange,
  onRemove,
  isSmallScreen,
}) => (
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
      <WorkspacePremiumIcon color='primary' />
      <Typography
        variant='subtitle1'
        sx={{
          fontWeight: 500,
          color: 'text.primary',
        }}
      >
        Certification #{index + 1}
      </Typography>
      {!isSmallScreen && (
        <Tooltip title='Remove Certification' arrow>
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
      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Certification Name'
          value={cert.name}
          onChange={(e) => onChange(e, index, 'certifications', 'name')}
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='e.g., AWS Solutions Architect'
          InputProps={{
            startAdornment: (
              <WorkspacePremiumIcon sx={{ mr: 1, color: 'text.secondary' }} />
            ),
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Issuer'
          value={cert.issuer}
          onChange={(e) => onChange(e, index, 'certifications', 'issuer')}
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='e.g., Amazon Web Services'
          InputProps={{
            startAdornment: (
              <BusinessIcon sx={{ mr: 1, color: 'text.secondary' }} />
            ),
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Date'
          value={cert.date}
          onChange={(e) => onChange(e, index, 'certifications', 'date')}
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='e.g., May 2023'
          InputProps={{
            startAdornment: (
              <CalendarTodayIcon sx={{ mr: 1, color: 'text.secondary' }} />
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

export const CertificationField = ({
  certifications,
  onChange,
  onRemove,
  onAdd,
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
              Certifications
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
              {isSmallScreen ? 'Add' : 'Add Certification'}
            </Button>
          </Box>

          {certifications.map((cert, index) => (
            <Fade in={true} key={index}>
              <div>
                <CertificationCard
                  cert={cert}
                  index={index}
                  onChange={onChange}
                  onRemove={onRemove}
                  isSmallScreen={isSmallScreen}
                />
              </div>
            </Fade>
          ))}

          {certifications.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
              <WorkspacePremiumIcon
                sx={{ fontSize: 40, mb: 1, opacity: 0.5 }}
              />
              <Typography variant='body2'>
                No certifications added yet. Click the button above to add your
                certifications.
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Grid>
  );
};
