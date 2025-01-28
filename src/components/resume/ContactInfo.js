import React from 'react';
import { Box, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { isEmpty } from '../../utils/helpers';

const ContactInfo = ({ email, phone, githubURL, linkedinURL }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        flexWrap: 'wrap',
        pt: 1,
      }}
    >
      {!isEmpty(email) && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmailIcon fontSize='small' />
          <Link href={`mailto:${email}`} color='inherit'>
            {email}
          </Link>
        </Box>
      )}
      {!isEmpty(phone) && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PhoneIcon fontSize='small' />
          <Link href={`tel:${phone}`} color='inherit'>
            {phone}
          </Link>
        </Box>
      )}
      {!isEmpty(githubURL) && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <GitHubIcon fontSize='small' />
          <Link href={githubURL} color='inherit' target='_blank'>
            GitHub
          </Link>
        </Box>
      )}
      {!isEmpty(linkedinURL) && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LinkedInIcon fontSize='small' />
          <Link href={linkedinURL} color='inherit' target='_blank'>
            LinkedIn
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default ContactInfo;
