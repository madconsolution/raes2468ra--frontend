import { Button } from "@/components/ui/button";

import InfoPage from "@/pages/info/InfoPage";
import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className=" mx-auto  md:grid-cols-[30%_60%]  bg-gray-200">
      <>
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </>

      {/* Main Content */}
      <>
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
        <div className="w-9/12 mx-auto">
          <InfoPage></InfoPage>
        </div>
      </>
    </div>
  );
};

export default MainLayout;
