import axios from 'axios';

export const fetchUserProfile = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/cv/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (userId, updatedData) => {
  try {
    const response = await axios.patch(
      `http://localhost:8080/cv/${userId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// export const handleLogout = async () => {
//   try {
//     const response = await axios.post('http://localhost:8080/logout', null, {
//       withCredentials: true,
//     });
//     if (response.status === 200) {
//       console.log('Logged out successfully');
//     }
//   } catch (error) {
//     console.error('Failed to log out:', error);
//   }
// };

export const apiLogout = async () => {
  try {
    const response = await axios.post('http://localhost:8080/logout');
    if (response.status === 200) {
      // Clear client-side storage (if you use any)
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken'); // If you are using sessionStorage
      console.log('Logged out successfully');
    }
  } catch (error) {
    console.error('Failed to log out:', error);
  }
};