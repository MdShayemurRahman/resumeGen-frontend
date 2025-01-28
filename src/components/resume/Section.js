import React from 'react';
import { Box, Typography } from '@mui/material';

const Section = ({ title, children }) => (
  <Box sx={{ mb: 2 }}>
    <Typography
      variant='h6'
      sx={{
        color: 'primary.main',
        fontWeight: 'bold',
        mb: 1,
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
