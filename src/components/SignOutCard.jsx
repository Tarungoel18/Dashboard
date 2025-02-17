import React from "react";
import { Link } from "react-router-dom";
const SignOutCard = () => {
  return (
    <div className="absolute right-4 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex flex-col space-y-3">
        <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Profile</p>
        <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Settings</p>
        <p className="hover:bg-gray-100 p-2 rounded cursor-pointer text-red-600">
          <Link to="/">Sign Out </Link>
        </p>
      </div>
    </div>
  );
};

export default SignOutCard;
