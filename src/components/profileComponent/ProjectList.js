import React from 'react';
import {
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@mui/material';

export const ProjectList = ({ projects }) => {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Projects
      </Typography>
      <Box mt={1}>
        <Divider style={{ backgroundColor: '#000' }} />
      </Box>
      <List>
        {projects.map((project, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={project.title}
              secondary={
                <>
                  {project.description && (
                    <Typography variant='body2'>
                      {project.description}
                    </Typography>
                  )}
                  {project.link && (
                    <Link href={project.link} target='_blank' rel='noopener'>
                      {project.link}
                    </Link>
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
