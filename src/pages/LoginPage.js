import React from 'react';

export const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/auth/linkedin';
  };

  return (
    <div className='login-page'>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with LinkedIn</button>
    </div>
  );
};




