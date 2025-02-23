import { Button } from "@/components/ui/button";

import Routes from "@/routes/Routes";
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
      <div>
        {/* Mobile Menu Button */}
        <div className="md:hidden p-4  text-gray-700 flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-gray-700"
            onClick={toggleSidebar}
          >
            <Menu className="w-23 h-16" />
          </Button>
        </div>

        {/* Page Content */}
        <div className="lg:ml-[40%]">
          <Routes />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
