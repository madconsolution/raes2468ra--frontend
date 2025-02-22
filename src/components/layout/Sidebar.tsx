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
          <span>Homes</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
