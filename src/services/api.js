import axios from 'axios';
import config from '../config/config';

const api = axios.create({
  baseURL: config.API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchUserProfile = async (userId) => {
  try {
    const response = await api.get(`/cv/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (userId, updatedData) => {
  try {
    const response = await api.patch(`/cv/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

export const handleLogout = async () => {
  try {
    const response = await api.post('/auth/logout');
    if (response.status === 200) {
      console.log('Logged out successfully');
      window.location.href = `${config.FRONTEND_URL}/login`;
    }
  } catch (error) {
    console.error('Failed to log out:', error);
    throw error;
  }
};

export const checkAuthentication = async () => {
  try {
    const response = await api.get('/auth/check-auth');
    return response.data.isAuthenticated;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
};

// Export the api instance in case you need to use it elsewhere
export default api;
