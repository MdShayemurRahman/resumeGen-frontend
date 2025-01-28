import React from 'react';
import { Button, Box } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useReactToPrint } from 'react-to-print';

const Settings = ({ componentRef }) => {
  const handleGeneratePDF = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `link2resume_${new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })}`,
  });

  return (
    <Box
      sx={{
        p: 2,
        height: '100%',
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Button
        onClick={handleGeneratePDF}
        variant='outlined'
        startIcon={<PictureAsPdfIcon />}
        fullWidth
        size='small'
      >
        Save as PDF
      </Button>
    </Box>
  );
};

export default Settings;
