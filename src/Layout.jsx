import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <div className="flex ">
        <Sidebar isOpen={isOpen} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
