import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Layout from "../Layout";
import Home from "./Home";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
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
