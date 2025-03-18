import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <>
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </>

      {/* Main Content */}
      <>
        {/* Mobile Menu Button */}
        <div className="md:hidden   text-gray-700 flex items-center ">
          <Button
            variant="ghost"
            className="text-gray-700"
            onClick={toggleSidebar}
          >
            <Menu className="w-23 h-16" />
          </Button>
        </div>
      </>
    </>
  );
};

export default MainLayout;
