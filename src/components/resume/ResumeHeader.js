import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

import { isEmpty } from '../../utils/helpers';

const ResumeHeader = ({ user, headline, summary }) => {
  return (
    <Box
      sx={{
        bgcolor: '#1a1a1a',
        color: 'white',
        p: 3,
        display: 'flex',
        gap: 3,
      }}
    >
      {user?.image && (
        <Avatar
          src={user.image}
          alt={user.fullName}
          sx={{
            width: 150,
            height: 150,
            border: '3px solid white',
          }}
        />
      )}
      <Box>
        {!isEmpty(user?.fullName) && (
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
            {user.fullName.toUpperCase()}
          </Typography>
        )}
        {!isEmpty(headline) && (
          <Typography variant='h6' sx={{ color: '#cccccc', mb: 1 }}>
            {headline}
          </Typography>
        )}
        {!isEmpty(summary) && (
          <Typography
            variant='body2'
            sx={{
              whiteSpace: 'pre-line',
            }}
          >
            {summary}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ResumeHeader;
