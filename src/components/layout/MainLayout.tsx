import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";
import { useState } from "react";
import SearchPage from "../searchPage/SearchPage";

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <>
        {/* Sidebar */}
        {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
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
        {/* <InfoPage></InfoPage> */}
        {/* <Profile4/> */}
        <SearchPage />
        <div className="p-6">{/* <HomePage /> */}</div>
      </div>
    </>
  );
};

export default MainLayout;
