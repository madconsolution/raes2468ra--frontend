import { Button } from "@/components/ui/button";

import Routes from "@/routes/Routes";
import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Profile1 from "@/pages/profile1/Profile1";
import Profile2 from "@/pages/profile2/Profile2";
import Profile3 from "@/pages/profile3/Profile3";
import Profile4 from "@/pages/profile4/Profile4";

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
        <InfoPage></InfoPage>
        <div className="p-6">{/* <HomePage /> */}</div>
      </div>
    </>
  );
};

export default MainLayout;
