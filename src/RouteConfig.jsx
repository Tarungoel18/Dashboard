import React from "react";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/SignUp";
const RouteConfig = () => {
  return (
    <Router>
      <Route path="/login" element={<LoginForm/>} />
      
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<SignupForm />} />
          <Route path="blogs" element={<Blogs />} />

          <Route
            element={
              <ProtectedRoute
                isAuthenticated={user.isAuthenticated}
                userRole={user.role}
                allowedRoles={["user", "admin"]}
              />
            }
          >
            <Route path="create" element={<Create />} />
          </Route>

          <Route
            element={
              <ProtectedRoute
                isAuthenticated={user.isAuthenticated}
                userRole={user.role}
                allowedRoles={["admin"]}
              />
            }
          >
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Route>

       
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
};

export default RouteConfig;
