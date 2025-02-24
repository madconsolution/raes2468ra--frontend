import { Button } from "@/components/ui/button";

import InfoPage from "@/pages/info/InfoPage";
import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Profile1 from "@/pages/profile1/Profile1";
import Profile2 from "@/pages/profile2/Profile2";


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
        {/* <InfoPage></InfoPage> */}
        {/* <Profile1></Profile1> */}
        <Profile2></Profile2>
        <div className="p-6">{/* <HomePage /> */}</div>
        
      </div>
    </div>
  );
};

export default MainLayout;
