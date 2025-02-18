import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginForm from "./src/components/LoginForm";
import SignUpForm from "./src/components/SignUpForm";
import Layout from "./src/Layout";
import Home from "./src/pages/Home";
import LoginPage from "./src/pages/LoginPage";
import SignUpPage from "./src/pages/SignUpPage";
const RouteConfig = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/home");
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    navigate("/home");
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/signup"
          element={<SignUpPage onSignup={handleSignup} />}
        />
        <Route element={<Layout />}>
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/" />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default RouteConfig;
