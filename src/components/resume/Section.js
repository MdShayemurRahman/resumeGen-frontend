import React from 'react';
import { Box, Typography } from '@mui/material';

const Section = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant='h5'
      sx={{
        color: 'primary.main',
        fontWeight: 'bold',
        mb: 2,
        pb: 1,
        borderBottom: '2px solid',
        borderColor: 'primary.main',
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

export default Section;
