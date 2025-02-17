import React from "react";
import { LayoutDashboard, ShieldCheck, RefreshCcw, Settings } from "lucide-react";

const SidePart = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#9B2C2C] to-[#C53030] flex flex-col justify-center items-center gap-8 px-8 py-12">
      {/* Unified Dashboard Section */}
      <div className="text-center space-y-2">
        <LayoutDashboard size={40} className="mx-auto text-white" />
        <h1 className="text-2xl font-extrabold text-white">Unified Dashboard</h1>
        <p className="text-base font-medium text-gray-200">
          Manage multiple escrow accounts from one place.
        </p>
      </div>

      {/* Secure Transactions Section */}
      <div className="text-center space-y-2">
        <ShieldCheck size={40} className="mx-auto text-white" />
        <h1 className="text-2xl font-extrabold text-white">Secure Transactions</h1>
        <p className="text-base font-medium text-gray-200">
          Multi-Factor Authentication (MFA) enabled for enhanced security.
        </p>
      </div>

      {/* Real-Time Balance Section */}
      <div className="text-center space-y-2">
        <RefreshCcw size={40} className="mx-auto text-white" />
        <h1 className="text-2xl font-extrabold text-white">Real-Time Balance</h1>
        <p className="text-base font-medium text-gray-200">
          Stay updated on your account balance instantly.
        </p>
      </div>

      {/* Customizable Workflow Section */}
      <div className="text-center space-y-2">
        <Settings size={40} className="mx-auto text-white" />
        <h1 className="text-2xl font-extrabold text-white">Customizable Workflow</h1>
        <p className="text-base font-medium text-gray-200">
          Split payments and automate your workflow seamlessly.
        </p>
      </div>
    </div>
  );
};

export default SidePart;