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
  MenuItem,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import GradeIcon from '@mui/icons-material/Grade';

const proficiencyLevels = [
  { value: 'Native', icon: '🟣' },
  { value: 'Advanced', icon: '🔵' },
  { value: 'Intermediate', icon: '🟢' },
  { value: 'Basic', icon: '🟡' },
  { value: 'Learning', icon: '⚪' },
];

const LanguageCard = ({ lang, index, onChange, onRemove, isSmallScreen }) => (
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
      <SignLanguageIcon color='primary' />
      <Typography
        variant='subtitle1'
        sx={{
          fontWeight: 500,
          color: 'text.primary',
        }}
      >
        Language #{index + 1}
      </Typography>
      {!isSmallScreen && (
        <Tooltip title='Remove Language' arrow>
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
          label='Language'
          value={lang.name}
          onChange={(e) => onChange(e, index, 'languages', 'name')}
          size={isSmallScreen ? 'small' : 'medium'}
          placeholder='e.g., English, Spanish'
          InputProps={{
            startAdornment: (
              <LanguageIcon sx={{ mr: 1, color: 'text.secondary' }} />
            ),
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          select
          label='Proficiency Level'
          value={lang.level}
          onChange={(e) => onChange(e, index, 'languages', 'level')}
          size={isSmallScreen ? 'small' : 'medium'}
          InputProps={{
            startAdornment: (
              <GradeIcon sx={{ mr: 1, color: 'text.secondary' }} />
            ),
          }}
        >
          {proficiencyLevels.map((level) => (
            <MenuItem
              key={level.value}
              value={level.value}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <span style={{ fontSize: '1.2em' }}>{level.icon}</span>
              {level.value}
            </MenuItem>
          ))}
        </TextField>
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

export const LanguageField = ({ languages, onChange, onRemove, onAdd }) => {
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
              Languages
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
              {isSmallScreen ? 'Add' : 'Add Language'}
            </Button>
          </Box>

          {languages.map((lang, index) => (
            <Fade in={true} key={index}>
              <div>
                <LanguageCard
                  lang={lang}
                  index={index}
                  onChange={onChange}
                  onRemove={onRemove}
                  isSmallScreen={isSmallScreen}
                />
              </div>
            </Fade>
          ))}

          {languages.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
              <SignLanguageIcon sx={{ fontSize: 40, mb: 1, opacity: 0.5 }} />
              <Typography variant='body2'>
                No languages added yet. Click the button above to add languages
                you speak.
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Grid>
  );
};
