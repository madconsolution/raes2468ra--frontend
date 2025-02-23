import { FiBookmark, FiCalendar, FiHome, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
  const navItems = [
    { id: "home", path: "/", icon: <FiHome size={24} />, label: "Home" },
    {
      id: "bookmark",
      path: "/bookmarks",
      icon: <FiBookmark size={24} />,
      label: "Bookmarks",
    },
    {
      id: "calendar",
      path: "/calendar",
      icon: <FiCalendar size={24} />,
      label: "Calendar",
    },
    {
      id: "profile",
      path: "/profile",
      icon: <FiUser size={24} />,
      label: "Profile",
    },
  ];

  return (
    <div className="fixed bottom-[5%] left-1/2 -translate-x-1/2 w-[60%] md:w-[40%] lg:w-[30%] bg-white shadow-lg rounded-2xl p-3 flex justify-around items-center">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) =>
            `p-2 transition-colors duration-300 ${
              isActive ? "text-purple-500" : "text-gray-400"
            }`
          }
        >
          {item.icon}
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNavbar;
