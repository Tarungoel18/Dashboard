// src/routeConfig.js
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Home from './pages/Home';
import Layout from './Layout';
const routes = [
  {
    path: '/',
    element: 'redirect',
    redirectTo: '/signup', // Redirect to login if not authenticated
  },
  {
    path: '/login',
    element: <Login />,
    isProtected: false, // Do not require authentication
  },
  {
    path: '/signup',
    element: <Signup />,
    isProtected: false, // Do not require authentication
  },
  {
    path: '/home',
    element: <Home />,
    layout: Layout,
    isProtected: true, // Require authentication
  },
];

export default routes;
