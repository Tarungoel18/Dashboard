import React, { useState, useEffect, useRef } from "react";
import { AlignJustify, CircleUserRound } from "lucide-react";
import logo from "../images/Logo1.png";
import SignOutCard from "./SignOutCard";

const Navbar = ({ setIsOpen }) => {
  const [showCard, setShowCard] = useState(false);
  const userIconRef = useRef(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  // Hide the card when clicking outside the user profile icon
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userIconRef.current && !userIconRef.current.contains(e.target)) {
        setShowCard(false);
      }
    };

    // Add event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white text-white drop-shadow-xl">
        <div className="flex items-center space-x-4 ">
          <AlignJustify
            className="cursor-pointer text-black"
            onClick={handleClick}
          />
          <img src={logo} className="w-60 h-15" />
        </div>
        <CircleUserRound
          className="cursor-pointer text-black"
          onClick={() => setShowCard(!showCard)}
          onMouseEnter={() => setShowCard(true)}
          ref={userIconRef} // Attach ref to the user icon
        />
      </div>
      {showCard && <SignOutCard />}
    </>
  );
};

export default Navbar;
