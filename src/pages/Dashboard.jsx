import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
    </div>
  );
};

export default Dashboard;
