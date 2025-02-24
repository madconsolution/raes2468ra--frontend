import { FaArrowRight } from "react-icons/fa";
import { FiSave, FiShare2 } from "react-icons/fi";

const AvatarWithInfo = () => {
  return (
    <div className=" py-2">
      <div className="flex justify-between px-5">
        <h2 className="[text-[#292A2C] ">Web Developement Team</h2>
        <div className="flex gap-6 text-gray-400">
          <FiSave size={20} />
          <FiShare2 size={20} />
        </div>
      </div>

      <div className="flex items-center justify-between px-4  bg-[#ffffff] rounded-lg ">
        {/* Avatar Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://i.postimg.cc/1RCnxwbt/download.png"
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-[#292A2C]">
              Kyle Gee Services
            </h3>
            <p className="text-sm text-gray-600">Software Engineer</p>
          </div>
        </div>

        {/* Arrow Icon */}
        <FaArrowRight className="text-gray-500 mr-8" />
      </div>
    </div>
  );
};

export default AvatarWithInfo;
