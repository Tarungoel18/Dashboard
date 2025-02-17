import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Castler_Logo from "../images/Castler_Logo.png";
import { Link } from "react-router-dom";
// Custom Input Component
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-semibold mb-2"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out ${
          meta.touched && meta.error
            ? "border-red-500 focus:ring-red-500"
            : "focus:ring-blue-400"
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

const SignupForm = ({ onSignup }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      // Here you would typically make an API call to register the user
      // const response = await api.signup(values);

      // For demonstration, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Call the onSignup prop passed from RouteConfig
      onSignup();

      // Navigate to home page
      navigate("/home");
    } catch (error) {
      // Handle specific error cases
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full">
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
                className="w-full bg-[#E53E3E] hover:bg-[#F56565] text-white font-semibold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="flex justify-center items-center mt-4">
          <p className="text-center text-[#E53E3E] text-sm">
            Already have an account?{" "}
          </p>
          <p className="text-[#E53E3E] hover:text-[#F56565] font-bold">
            <Link to="/"> Login </Link>
          </p>
        </div>

        {/* Powered by and logo centered at the bottom */}
        <div className="flex flex-col items-center mt-6">
          <p className="text-center text-[#E53E3E] text-sm">Powered By</p>
          <img src={Castler_Logo} alt="Castler" className="mt-2 w-20 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
