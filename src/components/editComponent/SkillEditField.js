import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Paper,
  Box,
  Chip,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[6],
  },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    transform: 'translateY(-2px)',
  },
}));

export const SkillField = ({ skills, onChange, onRemove, onAdd }) => {
  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      onAdd();
      e.preventDefault();
    }
  };

  return (
    <Grid item xs={12}>
      <StyledPaper elevation={3}>
        <Box p={3}>
          <Typography
            variant='h6'
            sx={{
              mb: 3,
              fontWeight: 600,
              color: 'primary.main',
              borderBottom: '2px solid',
              borderColor: 'primary.light',
              pb: 1,
            }}
          >
            Skills
          </Typography>

          {/* Input Fields */}
          <Grid container spacing={2}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover .delete-icon': {
                      opacity: 1,
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    label={`Skill ${index + 1}`}
                    value={skill}
                    onChange={(e) => onChange(e, index, 'skills')}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    size='small'
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                      },
                    }}
                  />
                  <Tooltip title='Remove Skill'>
                    <IconButton
                      size='small'
                      onClick={() => onRemove(index)}
                      className='delete-icon'
                      sx={{
                        opacity: 0,
                        transition: 'opacity 0.2s ease',
                        color: 'error.main',
                        '&:hover': {
                          backgroundColor: 'error.lighter',
                        },
                      }}
                    >
                      <DeleteIcon fontSize='small' />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Add Skill Button */}
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant='outlined'
              onClick={onAdd}
              startIcon={<AddCircleIcon />}
              sx={{
                borderRadius: '20px',
                px: 3,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'primary.lighter',
                },
              }}
            >
              Add New Skill
            </Button>
          </Box>

          {/* Skills Preview */}
          {skills.length > 0 && (
            <Box
              sx={{
                mt: 3,
                pt: 2,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography
                variant='subtitle2'
                sx={{
                  mb: 1,
                  color: 'text.secondary',
                  fontSize: '0.75rem',
                }}
              >
                Your Skills:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {skills.map(
                  (skill, index) =>
                    skill.trim() && (
                      <SkillChip
                        key={index}
                        label={skill}
                        onDelete={() => onRemove(index)}
                        color='primary'
                        variant='outlined'
                        size='small'
                      />
                    )
                )}
              </Box>
            </Box>
          )}
        </Box>
      </StyledPaper>
    </Grid>
  );
};
