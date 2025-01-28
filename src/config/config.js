const config = {
  development: {
    API_URL: 'http://localhost:8080',
    LINKEDIN_AUTH_URL: 'http://localhost:8080/auth/linkedin',
    FRONTEND_URL: 'http://localhost:3000',
  },
  production: {
    API_URL: 'https://link2resume-backend.onrender.com',
    LINKEDIN_AUTH_URL: 'https://link2resume-backend.onrender.com/auth/linkedin',
    FRONTEND_URL: 'https://link2resume.netlify.app', // Update this with your frontend URL
  },
};

const env = process.env.REACT_APP_NODE_ENV || 'development';
export default config[env];