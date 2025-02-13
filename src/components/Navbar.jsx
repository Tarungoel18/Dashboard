import React from "react";
import { AlignJustify, CircleUserRound } from "lucide-react";
import logo from "../images/Logo.png";
const Navbar = ({ setIsOpen }) => {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white drop-shadow-xl">
      <div className="flex items-center space-x-4 ">
        <AlignJustify className="cursor-pointer" onClick={handleClick} />
        <img src={logo} className="w-40" />
      </div>
      <CircleUserRound className="cursor-pointer" />
    </div>
  );
};

export default Navbar;
