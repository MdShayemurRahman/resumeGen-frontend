import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Paper,
  Box,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';

export const PersonalInfoField = ({ formData, setFormData }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [wordCount, setWordCount] = useState(
    formData.headline?.split(/\s+/).filter((word) => word !== '').length || 0
  );

  const handleHeadlineChange = (e) => {
    const inputWords = e.target.value
      .split(/\s+/)
      .filter((word) => word !== '');
    setWordCount(inputWords.length);

    if (inputWords.length > 100) {
      const truncatedInput = inputWords.slice(0, 100).join(' ');
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
              mb: { xs: 2, sm: 2.5, md: 3 },
              borderBottom: '2px solid',
              borderColor: 'primary.light',
              pb: 1,
            }}
          >
            <PersonIcon color='primary' sx={{ mr: 1 }} />
            <Typography
              variant={isSmallScreen ? 'subtitle1' : 'h6'}
              sx={{
                fontWeight: 600,
                color: 'primary.main',
              }}
            >
              Personal Information
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {/* Professional Title Section */}
            <Grid item xs={12}>
              <TextField
                name='Job Title'
                label='Professional Title'
                value={formData.headline || ''}
                fullWidth
                multiline
                rows={1}
                onChange={handleHeadlineChange}
                helperText={`${wordCount}/100 words`}
                size={isSmallScreen ? 'small' : 'medium'}
                placeholder='e.g., Senior Full Stack Developer'
                InputProps={{
                  startAdornment: (
                    <WorkIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  ),
                }}
              />
            </Grid>

            {/* Summary Section */}
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  bgcolor: 'background.paper',
                }}
              >
                <Typography variant='subtitle2' color='primary' sx={{ mb: 1 }}>
                  Professional Summary
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    mb: 2,
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
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.summary || ''}
                  onChange={handleSummaryChange}
                  placeholder='Write a brief summary of your professional background and key skills...'
                  size={isSmallScreen ? 'small' : 'medium'}
                  helperText={`${wordCount}/100 words - Use formatting tools above to enhance your summary`}
                  variant='outlined'
                />
              </Box>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12}>
              <Typography
                variant='subtitle2'
                color='primary'
                sx={{
                  mb: 2,
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  pb: 1,
                }}
              >
                Contact Information
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name='phone'
                    label='Phone Number'
                    value={formData.phone || ''}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    size={isSmallScreen ? 'small' : 'medium'}
                    placeholder='+358 XX XXX XXXX'
                    InputProps={{
                      startAdornment: (
                        <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name='githubURL'
                    label='GitHub Profile'
                    value={formData.githubURL || ''}
                    onChange={handleUserDataChange('githubURL')}
                    size={isSmallScreen ? 'small' : 'medium'}
                    placeholder='https://github.com/username'
                    InputProps={{
                      startAdornment: (
                        <GitHubIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='linkedinURL'
                    label='LinkedIn Profile'
                    value={formData.user?.linkedinURL || ''}
                    onChange={handleUserDataChange('linkedinURL')}
                    size={isSmallScreen ? 'small' : 'medium'}
                    placeholder='https://linkedin.com/in/username'
                    InputProps={{
                      startAdornment: (
                        <LinkedInIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};
