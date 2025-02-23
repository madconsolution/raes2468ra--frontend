import { FaArrowRight } from "react-icons/fa";

const AvatarWithInfo = () => {
  return (
    <div className="flex items-center justify-between px-4 mx-4 bg-[#ffffff] rounded-lg ">
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
      <FaArrowRight className="text-gray-500" />
    </div>
  );
};

export default AvatarWithInfo;
