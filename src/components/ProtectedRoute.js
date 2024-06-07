import React from 'react';
import { Navigate } from 'react-router-dom';
import { checkAuthentication } from '../Api/api';
import LoadingComponent from './Loading';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);

  React.useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await checkAuthentication();
      setIsAuthenticated(authStatus);
    };

    checkAuth();
    const intervalId = setInterval(checkAuth, 4 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (isAuthenticated === null) {
    return <LoadingComponent />;
  }

  return isAuthenticated ? children : <Navigate to='/login' replace />;
};

export default ProtectedRoute;
