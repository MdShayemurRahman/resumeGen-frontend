import React from 'react';
import { Box, Typography, Grid, Link, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Resume = ({ profileData }) => {
  // Helper function to check if a string is empty or undefined
  const isEmpty = (value) => !value || value.trim() === '';

  // Helper function to check if an array is empty or undefined
  const isArrayEmpty = (arr) => !arr || arr.length === 0;

  return (
    <Box
      sx={{
        width: '210mm',
        height: '297mm',
        bgcolor: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          bgcolor: '#1a1a1a',
          color: 'white',
          p: 4,
          display: 'flex',
          gap: 3,
        }}
      >
        {profileData.user.image && (
          <Avatar
            src={profileData.user.image}
            alt={profileData.user.fullName}
            sx={{
              width: 120,
              height: 120,
              border: '3px solid white',
            }}
          />
        )}
        <Box>
          {!isEmpty(profileData.user.fullName) && (
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 1 }}>
              {profileData.user.fullName.toUpperCase()}
            </Typography>
          )}
          {!isEmpty(profileData.headline) && (
            <Typography variant='body6' sx={{ color: '#cccccc', mb: 2 }}>
              {profileData.headline}
            </Typography>
          )}
          {!isEmpty(profileData.summary) && (
            <Typography variant='body1' sx={{ mb: 2, maxWidth: '600px' }}>
              {profileData.summary}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Contact info */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          flexWrap: 'wrap',
          p: 1,
        }}
      >
        {!isEmpty(profileData.user.email) && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon fontSize='small' />
            <Link href={`mailto:${profileData.user.email}`} color='inherit'>
              {profileData.user.email}
            </Link>
          </Box>
        )}
        {!isEmpty(profileData.phone) && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon fontSize='small' />
            <Link href={`tel:${profileData.phone}`} color='inherit'>
              {profileData.phone}
            </Link>
          </Box>
        )}
        {!isEmpty(profileData.githubURL) && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <GitHubIcon fontSize='small' />
            <Link href={profileData.githubURL} color='inherit'>
              GitHub
            </Link>
          </Box>
        )}
        {!isEmpty(profileData.user.linkedinURL) && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LinkedInIcon fontSize='small' />
            <Link
              href={profileData.user.linkedinURL}
              color='inherit'
              target='_blank'
            >
              LinkedIn
            </Link>
          </Box>
        )}
      </Box>

      {/* Main Content */}
      <Grid container sx={{ p: 4 }} spacing={4}>
        {/* Left Column */}
        <Grid item xs={7}>
          {!isArrayEmpty(profileData.experience) && (
            <Section title='Work Experience'>
              {profileData.experience.map((exp, index) => (
                <Box key={index} sx={{ mb: 3 }}>
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
                      {!isEmpty(exp.startDate) &&
                        !isEmpty(exp.endDate) &&
                        ' - '}
                      {!isEmpty(exp.endDate) && exp.endDate}
                      {(!isEmpty(exp.startDate) || !isEmpty(exp.endDate)) &&
                        !isEmpty(exp.location) &&
                        ' | '}
                      {!isEmpty(exp.location) && exp.location}
                    </Typography>
                  )}
                  {!isEmpty(exp.description) && (
                    <Typography
                      variant='body2'
                      sx={{
                        whiteSpace: 'pre-line', // Preserves line breaks in description
                      }}
                    >
                      {exp.description}
                    </Typography>
                  )}
                </Box>
              ))}
            </Section>
          )}

          {!isArrayEmpty(profileData.projects) && (
            <Section title='Projects'>
              {profileData.projects.map((project, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  {!isEmpty(project.title) && (
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                      {project.title}
                    </Typography>
                  )}
                  {!isEmpty(project.description) && (
                    <Typography variant='body2' sx={{ mb: 1 }}>
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
          )}
        </Grid>

        {/* Right Column */}
        <Grid item xs={5}>
          {!isArrayEmpty(profileData.skills) && (
            <Section title='Skills'>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {profileData.skills.map(
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
          )}

          {!isArrayEmpty(profileData.education) && (
            <Section title='Education'>
              {profileData.education.map((edu, index) => (
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
                      {!isEmpty(edu.startYear) &&
                        !isEmpty(edu.endYear) &&
                        ' - '}
                      {edu.endYear}
                    </Typography>
                  )}
                  {!isEmpty(edu.grade) && (
                    <Typography variant='body2'>Grade: {edu.grade}</Typography>
                  )}
                </Box>
              ))}
            </Section>
          )}

          {!isArrayEmpty(profileData.certifications) && (
            <Section title='Certifications'>
              {profileData.certifications.map((cert, index) => (
                <Box key={index} sx={{ mb: 2 }}>
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
          )}

          {!isArrayEmpty(profileData.languages) && (
            <Section title='Languages'>
              {profileData.languages.map(
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
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant='h5'
      sx={{
        color: 'primary.main',
        fontWeight: 'bold',
        mb: 2,
        pb: 1,
        borderBottom: '2px solid',
        borderColor: 'primary.main',
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

export default Resume;
