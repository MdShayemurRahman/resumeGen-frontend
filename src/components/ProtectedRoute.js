import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import LoadingComponent from './Loading';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);

  React.useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/auth/checkAuth',
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
    const intervalId = setInterval(checkAuthentication, 4 * 60 * 1000); // Check every 4 minutes

    return () => clearInterval(intervalId);
  }, []);

  if (isAuthenticated === null) {
    return <LoadingComponent />;
  }

  return isAuthenticated ? children : <Navigate to='/login' replace />;
};

export default ProtectedRoute;
