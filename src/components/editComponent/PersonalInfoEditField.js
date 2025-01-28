import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Paper,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const PersonalInfoField = ({ formData, setFormData, isMobile }) => {
  const [wordCount, setWordCount] = useState(
    formData.headline?.split(/\s+/).filter((word) => word !== '').length || 0
  );

  const handleHeadlineChange = (e) => {
    const inputWords = e.target.value
      .split(/\s+/)
      .filter((word) => word !== '');
    setWordCount(inputWords.length);

    if (inputWords.length > 20) {
      const truncatedInput = inputWords.slice(0, 20).join(' ');
      setFormData({
        ...formData,
        headline: truncatedInput,
      });
    } else {
      setFormData({
        ...formData,
        headline: e.target.value,
      });
    }
  };

  const handleFormat = (command) => {
    const textarea = document.querySelector('#summaryField');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.summary?.substring(start, end) || '';

    let newText = formData.summary || '';
    let newStart = start;
    let newEnd = end;

    switch (command) {
      case 'bold':
        newText =
          newText.substring(0, start) +
          `**${selectedText}**` +
          newText.substring(end);
        newEnd += 4;
        break;
      case 'italic':
        newText =
          newText.substring(0, start) +
          `*${selectedText}*` +
          newText.substring(end);
        newEnd += 2;
        break;
      case 'bullet':
        const lines = selectedText.split('\n');
        const bulletedLines = lines
          .map((line) => `• ${line.trim()}`)
          .join('\n');
        newText =
          newText.substring(0, start) + bulletedLines + newText.substring(end);
        newEnd = start + bulletedLines.length;
        break;
      default:
        break;
    }
    const inputWords = newText.split(/\s+/).filter((word) => word !== '');
    if (inputWords.length <= 100) {
      setFormData({
        ...formData,
        summary: newText,
      });
      setWordCount(inputWords.length);

      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(newStart, newEnd);
      }, 0);
    }
  };

  const handleSummaryChange = (e) => {
    const inputWords = e.target.value
      .split(/\s+/)
      .filter((word) => word !== '');
    setWordCount(inputWords.length);

    if (inputWords.length > 100) {
      const truncatedInput = inputWords.slice(0, 100).join(' ');
      setFormData({
        ...formData,
        summary: truncatedInput,
      });
    } else {
      setFormData({
        ...formData,
        summary: e.target.value,
      });
    }
  };

  const handleUserDataChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  return (
    <Grid item xs={12}>
      <Paper elevation={isMobile ? 1 : 3}>
        <Box p={{ xs: 2, sm: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant={isMobile ? 'subtitle1' : 'h6'}
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: 'primary.main',
                }}
              >
                Personal Information
              </Typography>
              <TextField
                name='Job Title'
                label='Job Title'
                value={formData.headline || ''}
                fullWidth
                multiline
                rows={1}
                onChange={handleHeadlineChange}
                helperText={`${wordCount}/20 words`}
                size={isMobile ? 'small' : 'medium'}
                sx={{ mb: 2 }}
              />

              {/* Summary field with formatting toolbar */}
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    mb: 1,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    pb: 1,
                  }}
                >
                  <Tooltip title='Bold'>
                    <IconButton
                      size='small'
                      onClick={() => handleFormat('bold')}
                    >
                      <FormatBoldIcon fontSize='small' />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Italic'>
                    <IconButton
                      size='small'
                      onClick={() => handleFormat('italic')}
                    >
                      <FormatItalicIcon fontSize='small' />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Bullet List'>
                    <IconButton
                      size='small'
                      onClick={() => handleFormat('bullet')}
                    >
                      <FormatListBulletedIcon fontSize='small' />
                    </IconButton>
                  </Tooltip>
                </Box>
                <TextField
                  id='summaryField'
                  name='Summary'
                  label='Summary'
                  value={formData.summary || ''}
                  fullWidth
                  multiline
                  rows={4}
                  onChange={handleSummaryChange}
                  helperText={`${wordCount}/100 words`}
                  size={isMobile ? 'small' : 'medium'}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name='phone'
                label='Phone'
                value={formData.phone || ''}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                size={isMobile ? 'small' : 'medium'}
                placeholder='+358 XX XXX XXXX'
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name='githubURL'
                label='GitHub URL'
                value={formData.githubURL || ''}
                onChange={handleUserDataChange('githubURL')}
                size={isMobile ? 'small' : 'medium'}
                placeholder='https://github.com/username'
                helperText='e.g., https://github.com/username'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name='linkedinURL'
                label='LinkedIn URL'
                value={formData.user?.linkedinURL || ''}
                onChange={handleUserDataChange('linkedinURL')}
                size={isMobile ? 'small' : 'medium'}
                placeholder='https://linkedin.com/in/username'
                helperText='e.g., https://linkedin.com/in/username'
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};
