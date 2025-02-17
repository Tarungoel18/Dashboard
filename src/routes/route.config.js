import { Routes,Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Home from "../pages/Home";
import Layout from "../Layout";
import PrivateRoute from "../PrivateRoute";
const AppRoutes = () =>[
  return(
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>

      }/>
      <Route path="/analytics" element={
        <PrivateRoute>
          <Analytics />
        </PrivateRoute>
      }/>
        <Route path="/settings" element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
   }/>
      
         <Route path="*" element={<NotFound/>} />

     </Routes>
  );

]

