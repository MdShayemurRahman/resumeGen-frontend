import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from './Section';
import { isEmpty, isArrayEmpty } from '../../utils/helpers';

const CertificationsSection = ({ certifications }) => {
  if (isArrayEmpty(certifications)) return null;

  return (
    <Section title='Certifications'>
      {certifications.map((cert, index) => (
        <Box key={index} sx={{ mb: 1 }}>
          {!isEmpty(cert.name) && (
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              {cert.name}
            </Typography>
          )}
          {(!isEmpty(cert.issuer) || !isEmpty(cert.date)) && (
            <Typography variant='body2' color='text.secondary'>
              {cert.issuer}
              {!isEmpty(cert.issuer) && !isEmpty(cert.date) && ' | '}
              {cert.date}
            </Typography>
          )}
        </Box>
      ))}
    </Section>
  );
};

export default CertificationsSection;
