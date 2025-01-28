import React from 'react';

import { Typography, Avatar, Box, Link } from '@mui/material';
import { Email, Phone, LinkedIn } from '@mui/icons-material';

export const UserProfileHeader = ({ profileData }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1.5rem', 
        paddingBottom: '1.5rem',
        paddingLeft: '3rem', 
        paddingRight: '3rem',
        backgroundColor: '#2C567A',
        color: 'primary.contrastText',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box>
        <Typography variant='h4' component='h1' gutterBottom>
          {profileData.user.fullName}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '1rem',
          }}
        >
          <Email sx={{ marginRight: '1rem' }} />
          <Link
            href={`mailto:${profileData.user.email}`}
            color='inherit'
            underline='hover'
          >
            {profileData.user.email}
          </Link>
        </Box>
        {profileData.phone && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '0.5rem',
            }}
          >
            <Phone sx={{ marginRight: '1rem' }} />
            <Link
              href={`tel:${profileData.phone}`}
              color='inherit'
              underline='hover'
            >
              {profileData.phone}
            </Link>
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '0.5rem',
          }}
        >
          <LinkedIn sx={{ marginRight: '1rem' }} />
          <Link
            href={profileData.user.linkedinURL}
            target='_blank'
            rel='noopener noreferrer'
            color='inherit'
            underline='hover'
          >
            {profileData.user.linkedinURL}
          </Link>
        </Box>
      </Box>
      <Avatar
        src={profileData.user.image}
        alt='User Profile Picture'
        sx={{
          width: 150,
          height: 150,
          border: '2px solid white',
          boxShadow: '0 0 0 2px white',
        }}
      />
    </Box>
  );
};
