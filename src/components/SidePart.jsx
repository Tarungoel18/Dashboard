import React from "react";
import { LayoutDashboard } from "lucide-react";
const SidePart = () => {
  return (
    <div className="w-1/2 bg-red-600 h-screen  bg-linear-to-b from-[#9B2C2C] to-[#C53030] flex flex-col gap-12 pt-20 ">
      <div className="text-center text-white space-y-4  ">
        <h1 className="text-4xl font-extrabold"> Unified Dashboard</h1>
        <p className="text-lg font-semibold">
          Manage Multiple Escrow Accounts From One Place
        </p>
      </div>
      <div className="text-center text-white space-y-4 ">
        <h1 className="text-4xl font-extrabold">Secure Transactions</h1>
        <p className="text-lg font-semibold">
          Multi-Factor Authentication (MFA) Enabled
        </p>
      </div>
      <div className="text-center text-white space-y-4 ">
        <h1 className="text-4xl font-extrabold">Real Time Balance</h1>
        <p className="text-lg font-semibold">
          Stay updated on your Account Balance Instantly
        </p>
      </div>
      <div className="text-center text-white space-y-4  ">
        <h1 className="text-4xl font-extrabold">Customizable Workflow</h1>
        <p className="text-lg font-semibold">
          Split payments and automate your workflow
        </p>
      </div>
    </div>
  );
};

export default SidePart;
// bg-linear-to-b from-[#FEB2B2] to-[#9B2C2C]
