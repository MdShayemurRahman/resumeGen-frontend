import React, { useState } from 'react';
import { Grid, TextField, Typography, Paper, Box } from '@mui/material';

export const PersonalInfoField = ({ formData, setFormData }) => {
  const [wordCount, setWordCount] = useState(
    formData.headline.split(/\s+/).filter((word) => word !== '').length
  );

  const handleHeadlineChange = (e) => {
    const inputWords = e.target.value
      .split(/\s+/)
      .filter((word) => word !== '');
    setWordCount(inputWords.length);

    if (inputWords.length > 50) {
      // Truncate the input to 50 words
      const truncatedInput = inputWords.slice(0, 50).join(' ');
      setFormData({ ...formData, headline: truncatedInput });
    } else {
      setFormData({ ...formData, headline: e.target.value });
    }
  };

  return (
    <Grid item xs={12}>
      <Paper elevation={3}>
        <Box p={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h6' sx={{ mb: 3 }}>
                Personal Information
              </Typography>
              <TextField
                name='headline'
                label='About Me'
                value={formData.headline}
                fullWidth
                multiline
                rows={4}
                onChange={handleHeadlineChange}
                helperText={`${wordCount}/50 words`}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name='phone'
                label='Phone'
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};
