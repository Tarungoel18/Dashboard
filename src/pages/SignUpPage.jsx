import React from "react";
import SignupForm from "./SignUpForm";
import SidePart from "../components/SidePart";
const SignUpPage = () => {
  return (
    <div className="flex w-full h-full ">
      <SidePart />
      <div className="w-1/2">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpPage;
