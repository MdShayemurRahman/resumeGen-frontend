import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  IconButton,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const LanguageField = ({
  languages,
  onChange,
  onRemove,
  onAdd,
  isMobile,
}) => {
  const proficiencyLevels = [
    'Native',
    'Advanced',
    'Intermediate',
    'Basic',
    'Learning',
  ];

  return (
    <Grid item xs={12}>
      <Paper elevation={isMobile ? 1 : 3}>
        <Box p={{ xs: 2, sm: 3 }}>
          <Typography
            variant={isMobile ? 'subtitle1' : 'h6'}
            sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}
          >
            Languages
          </Typography>

          {languages.map((lang, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Language'
                    value={lang.name}
                    onChange={(e) => onChange(e, index, 'languages', 'name')}
                    size={isMobile ? 'small' : 'medium'}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label='Proficiency Level'
                    value={lang.level}
                    onChange={(e) => onChange(e, index, 'languages', 'level')}
                    size={isMobile ? 'small' : 'medium'}
                  >
                    {proficiencyLevels.map((level) => (
                      <MenuItem key={level} value={level}>
                        {level}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <IconButton
                    onClick={() => onRemove(index)}
                    color='error'
                    sx={{ mt: 1 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          ))}

          <Button
            startIcon={<AddIcon />}
            onClick={onAdd}
            variant='outlined'
            size={isMobile ? 'small' : 'medium'}
          >
            Add Language
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};
