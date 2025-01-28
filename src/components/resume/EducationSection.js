import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from './Section';
import { isEmpty, isArrayEmpty } from '../../utils/helpers';

const EducationSection = ({ education }) => {
  if (isArrayEmpty(education)) return null;

  return (
    <Section title='Education'>
      {education.map((edu, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          {!isEmpty(edu.degree) && (
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
              {edu.degree}
            </Typography>
          )}
          {!isEmpty(edu.institution) && (
            <Typography variant='subtitle1' color='primary'>
              {edu.institution}
            </Typography>
          )}
          {(!isEmpty(edu.startYear) || !isEmpty(edu.endYear)) && (
            <Typography variant='subtitle2' color='text.secondary'>
              {edu.startYear}
              {!isEmpty(edu.startYear) && !isEmpty(edu.endYear) && ' - '}
              {edu.endYear}
            </Typography>
          )}
          {!isEmpty(edu.grade) && (
            <Typography variant='body2'>Grade: {edu.grade}</Typography>
          )}
        </Box>
      ))}
    </Section>
  );
};

export default EducationSection;
