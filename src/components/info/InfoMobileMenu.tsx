import {
  FiBriefcase,
  FiGlobe,
  FiHeart,
  FiInfo,
  FiMessageSquare,
  FiPhone,
  FiSettings,
  FiShoppingCart,
  FiStar,
  FiUser,
} from "react-icons/fi";

const menuSections = [
  {
    title: "MY DASHBOARD",
    items: [
      { name: "Add a Mentor", icon: FiBriefcase },
      { name: "Mentor Saved", icon: FiHeart },
      { name: "Chat", icon: FiMessageSquare },
      { name: "Orders", icon: FiShoppingCart },
      { name: "My Courses", icon: FiGlobe },
      { name: "Saved Tutor", icon: FiUser },
    ],
  },
  {
    title: "COURSES",
    items: [
      { name: "SPECIALS", icon: FiStar },
      { name: "Bootcamp Courses", icon: FiSettings },
      { name: "Professionals", icon: FiBriefcase },
    ],
  },
  {
    title: "PROFESSIONAL ACCOUNTS",
    items: [
      { name: "Exclusive Services", icon: FiPhone },
      { name: "Add Service Professionals", icon: FiUser },
      { name: "About", icon: FiInfo },
    ],
  },
];

const InfoMobileMenu = () => {
  return (
    <div className="w-9/12 md:w-full md:relative">
      {
        <div className="md:absolute   h-[100vh] bg-[#ffffff] shadow-md rounded-lg p-4">
          {menuSections.map((section) => (
            <div key={section.title} className="mb-4">
              <h3 className="text-gray-500 text-sm font-semibold mb-2 text-center">
                {section.title}
              </h3>
              <div className="grid grid-cols-3 gap-4 border-b pb-4 last:border-b-0">
                {section.items.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl shadow-xl bg-[#ffffff] hover:bg-gray-100 cursor-pointer"
                  >
                    <Icon className="menu_icon" />
                    <span className="menu_icon_text">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default InfoMobileMenu;
