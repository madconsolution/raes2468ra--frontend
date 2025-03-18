import React, { useState } from "react";
import { MdSearch } from "react-icons/md"; // Import the search icon from react-icons

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full max-w-lg mx-auto my-2">
      <div className="relative">
        <MdSearch className="absolute text-[#FFFFFF] left-4 top-1/2 transform -translate-y-1/2 " />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full px-12 py-2 search_field text-[#FFFFFF]  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
    </div>
  );
};

export default SearchField;
