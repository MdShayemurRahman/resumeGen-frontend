import React from 'react';
import { Typography } from '@mui/material';

import Section from './Section';
import { isEmpty, isArrayEmpty } from '../../utils/helpers';

const LanguagesSection = ({ languages }) => {
  if (isArrayEmpty(languages)) return null;

  return (
    <Section title='Languages'>
      {languages.map(
        (lang, index) =>
          (!isEmpty(lang.name) || !isEmpty(lang.level)) && (
            <Typography key={index} variant='body2'>
              {lang.name}
              {!isEmpty(lang.name) && !isEmpty(lang.level) && ' - '}
              {lang.level}
            </Typography>
          )
      )}
    </Section>
  );
};

export default LanguagesSection;
