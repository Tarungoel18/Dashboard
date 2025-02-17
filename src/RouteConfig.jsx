import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./RouteConfig"; // Import route configuration
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Layout from "./Layout";
import Home from "./pages/Home";
const RouteConfig = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Handle login and signup
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route element={<Layout />}>
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/signup" />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default RouteConfig;
