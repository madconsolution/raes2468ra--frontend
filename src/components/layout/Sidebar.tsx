import { cn } from "@/lib/utils";
import { Home, X } from "lucide-react";
import { Button } from "../ui/button";

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
        "fixed inset-y-0 left-0 z-50 w-64 bg-gray-100  p-4  text-gray-700 md:relative md:w-64 md:block",
        isOpen ? "block" : "hidden md:block"
      )}
    >
      <div className="flex  justify-between items-center">
        <h2 className="text-xl font-bold">Menu</h2>
        <Button
          variant="ghost"
          className="md:hidden text-gray-700 "
          onClick={toggleSidebar}
        >
          <X className="w-23 h-16" />
        </Button>
      </div>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
          <Home className="w-5 h-5" />
          <span>Home</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
