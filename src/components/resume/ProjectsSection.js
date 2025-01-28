import React from 'react';
import { Box, Typography, Link } from '@mui/material';

import Section from './Section';
import { isEmpty, isArrayEmpty } from '../../utils/helpers';

const ProjectsSection = ({ projects }) => {
  if (isArrayEmpty(projects)) return null;

  return (
    <Section title='Projects'>
      {projects.map((project, index) => (
        <Box key={index} sx={{ mb: 1 }}>
          {!isEmpty(project.title) && (
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              {project.title}
            </Typography>
          )}
          {!isEmpty(project.description) && (
            <Typography variant='body2' sx={{ mb: 0.4 }}>
              {project.description}
            </Typography>
          )}
          {!isEmpty(project.link) && (
            <Link href={project.link} target='_blank' color='primary'>
              View Project
            </Link>
          )}
        </Box>
      ))}
    </Section>
  );
};

export default ProjectsSection;
