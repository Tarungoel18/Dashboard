import React from "react";
import LoginForm from "./LoginForm";

import SidePart from "../components/SidePart";
const LoginPage = () => {
  return (
    <div className="flex w-full h-full ">
     <SidePart/>
      <div className="w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
