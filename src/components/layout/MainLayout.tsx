import { Button } from "@/components/ui/button";

import HomePage from "@/pages/home/HomePage";

import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Mobile Menu Button */}
        <div className="md:hidden p-4 bg-gray-800 text-white flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-white"
            onClick={toggleSidebar}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
