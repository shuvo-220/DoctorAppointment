import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  if (localStorage.getItem('token' && 'token')) {
    return <Navigate to='/' replace />;
  }
  return children;
};

export default PublicRoute;
