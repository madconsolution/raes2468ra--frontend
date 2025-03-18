import { FiHome, FiMessageSquare, FiSettings, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { id: "home", path: "/", icon: <FiHome size={24} />, label: "Home" },
    { id: "home", path: "/home", icon: <FiHome size={24} />, label: "Home" },
    // {
    //   id: "saved",
    //   path: "/saved",
    //   icon: <FiSave size={24} />,
    //   label: "Saved",
    // },
    {
      id: "chat",
      path: "/chat",
      icon: <FiMessageSquare size={24} />,
      label: "Chat",
    },
    {
      id: "order",
      path: "/detail",
      icon: <FiUser size={24} />,
      label: "Order",
    },
    {
      id: "setting",
      path: "/setting",
      icon: <FiSettings size={24} />,
      label: "Setting",
    },
  ];

  return (
    <div className="fixed bottom-[1%] left-1/2  lg:left-[65%]  bg-[#FFFFFF] -translate-x-1/2 w-[100%] md:w-[40%] lg:w-[30%]  rounded-2xl p-3 flex justify-around items-center">
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

export default Navbar;
