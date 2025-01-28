import React from 'react';
import { Box, Typography } from '@mui/material';

import Section from './Section';
import { isEmpty } from '../../utils/helpers';

const ExperienceSection = ({ experiences }) => {
  if (!experiences || experiences.length === 0) return null;

  return (
    <Section title='Work Experience'>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: 1 }}>
          {!isEmpty(exp.title) && (
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
              {exp.title}
            </Typography>
          )}
          {!isEmpty(exp.company) && (
            <Typography variant='subtitle1' color='primary'>
              {exp.company}
            </Typography>
          )}
          {(!isEmpty(exp.startDate) ||
            !isEmpty(exp.endDate) ||
            !isEmpty(exp.location)) && (
            <Typography
              variant='subtitle2'
              color='text.secondary'
              sx={{ mb: 1 }}
            >
              {!isEmpty(exp.startDate) && exp.startDate}
              {!isEmpty(exp.startDate) && !isEmpty(exp.endDate) && ' - '}
              {!isEmpty(exp.endDate) && exp.endDate}
              {(!isEmpty(exp.startDate) || !isEmpty(exp.endDate)) &&
                !isEmpty(exp.location) &&
                ' | '}
              {!isEmpty(exp.location) && exp.location}
            </Typography>
          )}
          {!isEmpty(exp.description) && (
            <Typography variant='body2' sx={{ whiteSpace: 'pre-line' }}>
              {exp.description}
            </Typography>
          )}
        </Box>
      ))}
    </Section>
  );
};

export default ExperienceSection;
