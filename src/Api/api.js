import axios from 'axios';

export const fetchUserProfile = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/cv/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (userId, updatedData) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_API_URL}/cv/${userId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

export const handleLogout = async () => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/logout`,
      null,
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      console.log('Logged out successfully');
    }

    // Redirect to login page or update the UI to reflect the logged-out state
    window.location.href = `/login`;
  } catch (error) {
    console.error('Failed to log out:', error);
  }
};

// export const checkAuthentication = async () => {
//   try {
//     const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/checkAuth`, {
//       withCredentials: true,
//     });
//     return response.data.isAuthenticated;
//   } catch (error) {
//     console.error('Error checking authentication:', error);
//     return false;
//   }
// };

export const checkAuthentication = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/checkAuth`,
    {
      credentials: 'include',
    }
  );
  const result = await response.json();
  return result.isAuthenticated;
};