import React from "react";
import SignUpForm from "../components/SignUpForm";
import SidePart from "../components/SidePart";

const SignUpPage = () => {
  return (
    <div className="flex w-full h-screen bg-gray-50">
      {/* Left Section: SidePart */}
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <SidePart />
      </div>

      {/* Right Section: Signup Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 bg-white">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;