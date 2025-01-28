import React from 'react';
import { Button, Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useReactToPrint } from 'react-to-print';

const Settings = ({ onEditProfile, componentRef }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleGeneratePDF = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `link2resume_${new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })}`,
  });

  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        position: isTablet ? 'relative' : 'sticky',
        top: isTablet ? 'auto' : '1rem',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
          justifyContent: isMobile ? 'center' : 'flex-start',
          gap: { xs: 2, sm: 2, md: 2 },
          p: { xs: 1, sm: 1.5, md: 2 },
          backgroundColor: 'background.paper',
          borderRadius: 1,
          boxShadow: isMobile ? 1 : 0,
          position: 'sticky',
          top: '1rem',
          '@media print': {
            display: 'none',
          },
        }}
      >
        <Button
          onClick={onEditProfile}
          variant='contained'
          startIcon={<EditIcon />}
          sx={{
            width: isMobile ? 'auto' : '100%',
            minWidth: { xs: '120px', sm: '150px' },
            fontSize: { xs: '0.875rem', sm: '1rem' },
            py: { xs: 1, sm: 1.5 },
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
            textTransform: 'none',
          }}
        >
          Edit Profile
        </Button>

        <Button
          onClick={handleGeneratePDF}
          variant='outlined'
          startIcon={<PictureAsPdfIcon />}
          sx={{
            width: isMobile ? 'auto' : '100%',
            minWidth: { xs: '120px', sm: '150px' },
            fontSize: { xs: '0.875rem', sm: '1rem' },
            py: { xs: 1, sm: 1.5 },
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            '&:hover': {
              borderColor: theme.palette.primary.dark,
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
            textTransform: 'none',
          }}
        >
          Save as PDF
        </Button>
      </Box>
    </Grid>
  );
};

export default Settings;
