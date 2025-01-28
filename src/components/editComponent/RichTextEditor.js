import React from 'react';
import { Typography, TextField, Box, IconButton, Tooltip } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const RichTextEditor = ({
  value,
  onChange,
  label,
  rows = 4,
  maxWords = 100,
  placeholder,
  isSmallScreen,
  showWordCount = true,
}) => {
  const handleFormat = (command) => {
    const textarea = document.querySelector('#richTextArea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value?.substring(start, end) || '';

    let newText = value || '';
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

    const wordCount = newText.split(/\s+/).filter((word) => word !== '').length;

    if (wordCount <= maxWords) {
      onChange(newText);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(newStart, newEnd);
      }, 0);
    }
  };

  const getWordCount = (text) => {
    return text?.split(/\s+/).filter((word) => word !== '').length || 0;
  };

  return (
    <Box
      sx={{
        p: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        bgcolor: 'background.paper',
      }}
    >
      {label && (
        <Typography variant='subtitle2' color='primary' sx={{ mb: 1 }}>
          {label}
        </Typography>
      )}

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
          <IconButton size='small' onClick={() => handleFormat('bold')}>
            <FormatBoldIcon fontSize='small' />
          </IconButton>
        </Tooltip>
        <Tooltip title='Italic'>
          <IconButton size='small' onClick={() => handleFormat('italic')}>
            <FormatItalicIcon fontSize='small' />
          </IconButton>
        </Tooltip>
        <Tooltip title='Bullet List'>
          <IconButton size='small' onClick={() => handleFormat('bullet')}>
            <FormatListBulletedIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      </Box>

      <TextField
        id='richTextArea'
        fullWidth
        multiline
        rows={rows}
        value={value || ''}
        onChange={(e) => {
          const wordCount = getWordCount(e.target.value);
          if (wordCount <= maxWords) {
            onChange(e.target.value);
          }
        }}
        placeholder={placeholder}
        size={isSmallScreen ? 'small' : 'medium'}
        helperText={
          showWordCount &&
          `${getWordCount(
            value
          )}/${maxWords} words - Use formatting tools above to enhance your text`
        }
        variant='outlined'
      />
    </Box>
  );
};
