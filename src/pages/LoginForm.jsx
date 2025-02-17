import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// Custom Input Component
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-semibold mb-2"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-xs mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Call the onLogin function (e.g., to update global state)
      onLogin();

      // Redirect to the home page
      navigate("/home");
    } catch (error) {
      // Handle specific error cases
      if (error.field) {
        setFieldError(error.field, error.message);
      } else {
        setFieldError("email", "Login failed. Please check your credentials.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Log In
        </h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters")
              .required("Password is required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="yourname@example.com"
              />
              <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="••••••••"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
              >
                {isSubmitting ? "Logging In..." : "Log In"}
              </button>

              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-600 text-sm">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                    onClick={() => navigate("/signup")} // Add navigation to signup page
                  >
                    Sign Up
                  </button>
                </p>
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700 text-sm font-semibold"
                  onClick={() => navigate("/forgot-password")} // Add navigation to forgot password page
                >
                  Forgot Password?
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
