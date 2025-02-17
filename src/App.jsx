// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes/route.config'; // Import route configuration

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  

 
  const handleLogin = () => {
    setIsAuthenticated(true);
 
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    
  };

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const { path, element, layout: Layout, isProtected, redirectTo } = route;

          // If the route is protected, we check the authentication status
          if (isProtected && !isAuthenticated) {
            return <Route key={index} path={path} element={<Navigate to="/signup" />} />;
          }

          // Redirect logic for the home page or login page
          if (redirectTo) {
            return <Route key={index} path={path} element={<Navigate to={redirectTo} />} />;
          }

          // Render the route with layout if provided
          const RouteElement = Layout ? (
            <Layout>
              {element}
            </Layout>
          ) : (
            element
          );

          return <Route key={index} path={path} element={RouteElement} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
