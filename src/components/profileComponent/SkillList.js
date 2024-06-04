// SkillsList.js
import React from 'react';
import {
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

export const SkillList = ({ skills }) => {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Skills
      </Typography>
      <Box mt={1}>
        <Divider style={{ backgroundColor: '#000' }} />
      </Box>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
