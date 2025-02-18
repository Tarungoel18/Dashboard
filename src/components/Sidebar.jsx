import React from "react";
import {
  Home,
  User,
  Settings,
  PieChart,
  CreditCard,
  LineChart,
  Wallet,
  ArrowUpRight,
  Bell,
} from "lucide-react";

const Sidebar = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  const menuItems = [
    { name: "Overview", icon: <Home size={20} />, badge: "" },
    { name: "Analytics", icon: <LineChart size={20} />, badge: "New" },
    { name: "Investments", icon: <PieChart size={20} />, badge: "+4.2%" },
    { name: "Transactions", icon: <CreditCard size={20} />, badge: "3" },
    { name: "Wallet", icon: <Wallet size={20} />, badge: "" },
    { name: "Profile", icon: <User size={20} />, badge: "" },
    { name: "Settings", icon: <Settings size={20} />, badge: "" },
  ];

  return (
    <div
      className="flex flex-col w-80 h-screen bg 
      bg-gradient-to-b from-blue-900 to-blue-950 text-white shadow-xl"
    >
      {/* Logo & Header */}
      <div className="flex items-center justify-between h-16 px-6 border-b border-blue-800/30">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <ArrowUpRight size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-bold">FinTech Pro</h1>
        </div>
        <div className="relative">
          <Bell
            size={20}
            className="text-blue-400 hover:text-white transition-colors"
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs">2</span>
          </div>
        </div>
      </div>

      {/* Account Summary */}
      <div className="p-6 bg-blue-800/20 border-b border-blue-800/30">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-300">Total Balance</span>
          <span className="text-xs text-green-400">+2.4%</span>
        </div>
        <div className="text-2xl font-bold">$84,234.58</div>
        <div className="mt-2 flex items-center text-xs text-blue-300">
          <ArrowUpRight size={14} className="text-green-400 mr-1" />
          <span>Up from last month</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center justify-between px-4 py-3 text-sm rounded-xl
              hover:bg-blue-800/30 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <div
                className="text-blue-400 group-hover:text-white 
                transition-colors"
              >
                {item.icon}
              </div>
              <span className="font-medium">{item.name}</span>
            </div>
            {item.badge && (
              <span
                className={`text-xs px-2 py-1 rounded-full 
                ${
                  item.badge.includes("%")
                    ? "bg-green-500/20 text-green-400"
                    : item.badge === "New"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-blue-800/30 text-blue-300"
                }`}
              >
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-t border-blue-800/30">
        <div
          className="flex items-center space-x-3 p-2 rounded-xl 
          hover:bg-blue-800/30 transition-all duration-200 cursor-pointer"
        >
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-r 
            from-blue-400 to-blue-600 flex items-center justify-center"
          >
            <span className="text-lg font-bold">JD</span>
          </div>
          <div className="flex-1">
            <div className="font-medium">John Doe</div>
            <div className="text-xs text-blue-300">Premium Account</div>
          </div>
          <Settings size={18} className="text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
