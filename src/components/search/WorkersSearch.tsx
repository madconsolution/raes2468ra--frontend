import { FiSearch } from "react-icons/fi";
const WorkersSearch = () => {
  return (
    <div className="flex items-center border-[#eaebec] bg-white rounded-full shadow-sm px-4 py-3">
      <FiSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="w-full outline-none bg-transparent"
      />
    </div>
  );
};

export default WorkersSearch;
