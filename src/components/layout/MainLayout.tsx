import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HomePage from "@/pages/home/HomePage";
import { Home, Menu, X } from "lucide-react";
import { useState } from "react";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 p-4 text-white md:relative md:w-64 md:block",
        isOpen ? "block" : "hidden md:block"
      )}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Menu</h2>
        <Button
          variant="ghost"
          className="md:hidden text-white"
          onClick={toggleSidebar}
        >
          <X className="w-6 h-6" />
        </Button>
      </div>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
          <Home className="w-5 h-5" />
          <span>Home</span>
        </li>
      </ul>
    </div>
  );
};

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
