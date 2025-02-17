import React from "react";
import { Home, User, Settings } from "lucide-react";
const Sidebar = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="flex flex-col w-80 h-screen bg-[#C53030] text-white shadow-lg">
      {/* Dashboard Header */}
      <div className="flex items-center justify-center h-16 border-b border-gray-800">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      {/* Sidebar Menu */}
      <div className="flex flex-col p-4 space-y-3">
        {[
          { name: "Home", icon: <Home size={20} /> },
          { name: "Profile", icon: <User size={20} /> },
          { name: "Settings", icon: <Settings size={20} /> },
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center space-x-3 px-4 py-2 text-sm font-medium  hover:bg-[#9B2C2C] rounded-lg transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
