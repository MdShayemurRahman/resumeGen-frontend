import React from 'react';
import {
  Typography,
  List,
  Box,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { School } from '@mui/icons-material';

export const EducationList = ({ education }) => {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Education
      </Typography>
      <Box mt={1}>
        <Divider style={{ backgroundColor: '#000' }} />
      </Box>
      <List>
        {education.map((edu, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <School />
            </ListItemIcon>
            <ListItemText
              primary={edu.degree}
              secondary={
                <>
                  {edu.institution && (
                    <Typography variant='body2'>{edu.institution}</Typography>
                  )}
                  {edu.startYear && edu.endYear && (
                    <Typography variant='body2'>
                      {edu.startYear} - {edu.endYear}
                    </Typography>
                  )}
                  {edu.grade && (
                    <Typography variant='body2'>Grade: {edu.grade}</Typography>
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
