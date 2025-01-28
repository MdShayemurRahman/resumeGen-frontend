// Settings.js
import React from 'react';
import { Button, Box, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useReactToPrint } from 'react-to-print';

const Settings = ({ onEditProfile, componentRef }) => {
  const handleGeneratePDF = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `link2resume_${new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })}`,
  });

  return (
    <Grid item xs={12} md={4}>
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
          onClick={handleGeneratePDF}
          variant='outlined'
          startIcon={<PictureAsPdfIcon />}
        >
          Save as PDF
        </Button>
      </Box>
    </Grid>
  );
};

export default Settings;
