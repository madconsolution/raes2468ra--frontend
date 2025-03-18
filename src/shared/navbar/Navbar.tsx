import { BsFillTicketDetailedFill } from "react-icons/bs";
import { FiHome, FiSearch } from "react-icons/fi";
import { IoFilmOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { id: "home", path: "/", icon: <FiHome size={24} />, label: "Home" },
    {
      id: "details",
      path: "/details",
      icon: <BsFillTicketDetailedFill size={24} />,
      label: "details",
    },
    {
      id: "workers",
      path: "/workers-search",
      icon: <FiSearch size={24} />,
      label: "Workers",
    },
    {
      id: "terms-condition",
      path: "terms-condition",
      icon: <IoFilmOutline size={24} />,
      label: "terms-condition",
    },
  ];

  return (
    <div className="fixed bottom-[1%] left-1/2 lg:left-[65%] bg-[#FFFFFF] -translate-x-1/2 w-[100%] md:w-[40%] lg:w-[30%] rounded-2xl p-3 flex justify-around items-center">
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
