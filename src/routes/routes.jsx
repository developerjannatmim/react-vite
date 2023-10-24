import React from 'react'
import Dashboard from '../components/Dashboard';
import Classroom from '../components/Classroom';

const routes = [
  {path: '/', exact: true, name: 'Admin'},
  {path: '/dashboard', exact: true, name: 'Dashboard', element: <Dashboard/> },
  {path: '/class', exact: true, name: 'Classroom', element: <Classroom/> },
]

export default routes