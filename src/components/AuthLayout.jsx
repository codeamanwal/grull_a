/* eslint-disable */
// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react';
import AuthService from '../Services/AuthService';
import {Navigate, Outlet} from 'react-router-dom';

const AuthLayout = ({onlyAuthorized}) => {
  // Add your own authentication on the below line.
  if (onlyAuthorized) {
    if (!AuthService.isLoggedIn()) {
      return <Navigate to={'/login'} replace />;
    }
    return <Outlet />;
  }

  if (AuthService.isLoggedIn()) {
    return <Navigate to={'/LoggedInPage'} replace />;
  }
  
  return <Outlet />;

};

export default AuthLayout;
