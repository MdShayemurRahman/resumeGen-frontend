// Settings.js
import React from 'react';
import { Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Settings = ({ onEditProfile, onGeneratePDF }) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' p={2}>
      <Button
        onClick={onEditProfile}
        variant='outlined'
        startIcon={<EditIcon />}
        sx={{ mb: 2 }}
      >
        Edit Profile
      </Button>
      <Button
        onClick={onGeneratePDF}
        variant='outlined'
        startIcon={<PictureAsPdfIcon />}
      >
        Save as PDF
      </Button>
    </Box>
  );
};

export default Settings;
