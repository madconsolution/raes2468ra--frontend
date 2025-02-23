import { cn } from "@/lib/utils";
import { X } from "lucide-react";

import InfoMobileMenu from "../info/InfoMobileMenu";
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
        "fixed inset-y-0 left-0 z-50 w-full   md:relative md:w-[25%] md:block",
        isOpen ? "block" : "hidden md:block"
      )}
    >
      <div className="flex  justify-between items-center">
        <Button
          variant="ghost"
          className="md:hidden text-gray-700 "
          onClick={toggleSidebar}
        >
          <X className="w-23 h-16" />
        </Button>
      </div>
      <InfoMobileMenu></InfoMobileMenu>
    </div>
  );
};

export default Sidebar;
