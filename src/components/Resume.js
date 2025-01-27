import React from 'react';
import { Box, Divider, Typography, Grid } from '@mui/material';
import { UserProfileHeader } from './profileComponent/UserProfileHeader';
import { EducationList } from './profileComponent/EducationList';
import { ExperienceList } from './profileComponent/ExperienceList';
import { SkillList } from './profileComponent/SkillList';
import { ProjectList } from './profileComponent/ProjectList';

const Resume = ({ profileData }) => {
  return (
    <Box
      sx={{
        height: '297mm',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.9)',
        backgroundImage: `url(/design_templates/design1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ marginBottom: '2rem' }}>
        <UserProfileHeader profileData={profileData} />
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ marginBottom: '1rem', padding: '0 2rem' }}>
            <Typography variant='h6' gutterBottom>
              About Me
            </Typography>
            <Box mt={1}>
              <Divider style={{ backgroundColor: '#000' }} />
            </Box>
            <Box sx={{ margin: '1rem 0' }}>
              <Typography variant='body1' gutterBottom>
                {profileData.headline}
              </Typography>
            </Box>
          </Box>
        </Grid>
        {profileData.skills && profileData.skills.length > 0 && (
          <Grid item xs={12} sm={6}>
            <Box sx={{ marginBottom: '1rem', padding: '0 2rem' }}>
              <SkillList skills={profileData.skills} />
            </Box>
          </Grid>
        )}
        {profileData.experience && profileData.experience.length > 0 && (
          <Grid item xs={12} sm={6}>
            <Box sx={{ marginBottom: '1rem', padding: '0 2rem' }}>
              <ExperienceList experience={profileData.experience} />
            </Box>
          </Grid>
        )}
        {profileData.projects && profileData.projects.length > 0 && (
          <Grid item xs={12} sm={6}>
            <Box sx={{ marginBottom: '1rem', padding: '0 2rem' }}>
              <ProjectList projects={profileData.projects} />
            </Box>
          </Grid>
        )}
        {profileData.education && profileData.education.length > 0 && (
          <Grid item xs={12} sm={6}>
            <Box sx={{ marginBottom: '1rem', padding: '0 2rem' }}>
              <EducationList education={profileData.education} />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Resume;

// import React from 'react';
// import { Box, Typography, Grid, Paper, Avatar, Chip } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// const Resume = ({ profileData }) => {
//   return (
//     <Box sx={{ bgcolor: '#f5f5f5', p: 3, minHeight: '297mm' }}>
//       <Paper
//         elevation={3}
//         sx={{ p: 3, mb: 3, bgcolor: 'primary.main', color: 'white' }}
//       >
//         <Grid container spacing={2} alignItems='center'>
//           <Grid item xs={12} sm={9}>
//             <Typography variant='h4' component='h1'>
//               {profileData.user.name.toUpperCase()}
//             </Typography>
//             <Typography variant='subtitle1'>{profileData.headline}</Typography>
//             <Box sx={{ mt: 2 }}>
//               <Typography variant='body2'>
//                 <PhoneIcon fontSize='small' /> {profileData.user.phone}
//               </Typography>
//               <Typography variant='body2'>
//                 <EmailIcon fontSize='small' /> {profileData.user.email}
//               </Typography>
//               <Typography variant='body2'>
//                 <LinkedInIcon fontSize='small' /> {profileData.linkedin}
//               </Typography>
//               <Typography variant='body2'>
//                 <LocationOnIcon fontSize='small' /> {profileData.location}
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={3}>
//             <Avatar
//               sx={{ width: 100, height: 100, ml: 'auto' }}
//               src={profileData.user.avatar}
//             />
//           </Grid>
//         </Grid>
//       </Paper>

//       <Grid container spacing={3}>
//         <Grid item xs={12} md={8}>
//           <ExperienceSection experience={profileData.experience} />
//           <TechStackSection skills={profileData.skills} />
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <AchievementsSection achievements={profileData.achievements} />
//           <CertificationsSection certifications={profileData.certifications} />
//           <EducationSection education={profileData.education} />
//           <PassionsSection passions={profileData.passions} />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// const ExperienceSection = ({ experience }) => (
//   <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
//     <Typography variant='h5' component='h2' color='primary' gutterBottom>
//       EXPERIENCE
//     </Typography>
//     {experience.map((job, index) => (
//       <Box key={index} sx={{ mb: 2 }}>
//         <Typography variant='h6'>{job.title}</Typography>
//         <Typography variant='subtitle1' color='primary'>
//           {job.company}
//         </Typography>
//         <Typography variant='body2' color='text.secondary'>
//           {job.startDate} - {job.endDate} | {job.location}
//         </Typography>
//         <ul>
//           {job.description.split('\n').map((item, idx) => (
//             <li key={idx}>{item}</li>
//           ))}
//         </ul>
//       </Box>
//     ))}
//   </Paper>
// );

// const TechStackSection = ({ skills }) => (
//   <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
//     <Typography variant='h5' component='h2' color='primary' gutterBottom>
//       TECH STACK
//     </Typography>
//     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//       {skills.map((skill, index) => (
//         <Chip key={index} label={skill} variant='outlined' />
//       ))}
//     </Box>
//   </Paper>
// );

// const AchievementsSection = ({ achievements }) => (
//   <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
//     <Typography variant='h5' component='h2' color='primary' gutterBottom>
//       ACHIEVEMENTS
//     </Typography>
//     {achievements.map((achievement, index) => (
//       <Box key={index} sx={{ mb: 2 }}>
//         <Typography variant='h6'>{achievement.title}</Typography>
//         <Typography variant='body2'>{achievement.description}</Typography>
//       </Box>
//     ))}
//   </Paper>
// );

// const CertificationsSection = ({ certifications }) => (
//   <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
//     <Typography variant='h5' component='h2' color='primary' gutterBottom>
//       CERTIFICATIONS
//     </Typography>
//     {certifications.map((cert, index) => (
//       <Box key={index} sx={{ mb: 1 }}>
//         <Typography variant='body1'>{cert.name}</Typography>
//         <Typography variant='body2' color='text.secondary'>
//           {cert.issuer}
//         </Typography>
//       </Box>
//     ))}
//   </Paper>
// );

// const EducationSection = ({ education }) => (
//   <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
//     <Typography variant='h5' component='h2' color='primary' gutterBottom>
//       EDUCATION
//     </Typography>
//     {education.map((edu, index) => (
//       <Box key={index} sx={{ mb: 2 }}>
//         <Typography variant='h6'>{edu.degree}</Typography>
//         <Typography variant='body2' color='text.secondary'>
//           {edu.school}
//         </Typography>
//         <Typography variant='body2' color='text.secondary'>
//           {edu.startDate} - {edu.endDate}
//         </Typography>
//       </Box>
//     ))}
//   </Paper>
// );

// const PassionsSection = ({ passions }) => (
//   <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
//     <Typography variant='h5' component='h2' color='primary' gutterBottom>
//       PASSIONS
//     </Typography>
//     {passions.map((passion, index) => (
//       <Typography key={index} variant='body1'>
//         {passion}
//       </Typography>
//     ))}
//   </Paper>
// );

// export default Resume;
