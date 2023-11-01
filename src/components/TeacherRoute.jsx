import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const userAuth = () => {
  const location = useLocation();
  const userRole = localStorage.getItem("role");

  if (userRole === '2') {
      return true
    }
    else{
      return false
  }
}

const TeacherRoute = () => {
  const auth = userAuth();

  return auth ? <Outlet /> : <Navigate to={'/login'} state={{ from: location.pathname }} replace />

};

export default TeacherRoute;
