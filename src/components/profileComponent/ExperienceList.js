import React from 'react';
import {
  Typography,
  List,
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Work } from '@mui/icons-material';

import { formatExperienceDate } from '../../helper/dateHelpers';

export const ExperienceList = ({ experience }) => {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Experience
      </Typography>
      <Box mt={1}>
        <Divider style={{ backgroundColor: '#000' }} />
      </Box>
      <List>
        {experience.map((exp, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText
              primary={`${exp.title} - ${exp.company}`}
              secondary={
                <>
                  {exp.description && (
                    <Typography variant='body2'>{exp.description}</Typography>
                  )}
                  {exp.startDate && exp.endDate && (
                    <Typography variant='body2'>
                      {new Date(exp.startDate).getFullYear()} -{' '}
                      {new Date(exp.endDate).getFullYear()}
                    </Typography>
                  )}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};
