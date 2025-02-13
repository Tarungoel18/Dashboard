import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import React from "react";
import { useState } from "react";
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
