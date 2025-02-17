import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import Castler_Logo from "../images/Castler_Logo.png";

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

const SignUpForm = ({ onSignup }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      // Simulate an API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (onSignup) onSignup();
      navigate("/home");
    } catch (error) {
      if (error.field) {
        setFieldError(error.field, error.message);
      } else {
        setFieldError("email", "Registration failed. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Logo centered at the top */}
      <div className="flex justify-center mb-6">
        <img
          src="https://latestlogo.com/wp-content/uploads/2024/01/idfc-first-bank-logo.svg"
          alt="Castler Logo"
          className="w-24 h-24"
        />
      </div>

      <h2 className="text-2xl font-bold text-center text-[#E53E3E] mb-6">
        Create an Account!
      </h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Your Name"
            />
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
            <MyTextInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E53E3E] hover:bg-[#F56565] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>

            <div className="flex justify-center items-center mt-4">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="text-[#E53E3E] hover:text-[#F56565] font-semibold"
                >
                  Login
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>

      {/* Powered By Section */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-center text-[#E53E3E] text-sm">Powered By</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          
          <img
            src={Castler_Logo}
            alt="Castler Logo"
            className="w-12 h-6"
          />
        </div>
        </div>
      </div>
    
  );
};

export default SignUpForm;