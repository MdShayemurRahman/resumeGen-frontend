import React from 'react';
import { Box } from '@mui/material';

import Section from './Section';
import { isEmpty, isArrayEmpty } from '../../utils/helpers';

const SkillsSection = ({ skills }) => {
  if (isArrayEmpty(skills)) return null;

  return (
    <Section title='Skills'>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map(
          (skill, index) =>
            !isEmpty(skill) && (
              <Box
                key={index}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: '0.9rem',
                }}
              >
                {skill}
              </Box>
            )
        )}
      </Box>
    </Section>
  );
};

export default SkillsSection;
