import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const WorkersSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Define available pages and their keywords
  const pages = [
    {
      name: "details",
      path: "/details",
      keywords: ["details", "web development"],
    },
    {
      name: "course details",
      path: "/course-details",
      keywords: ["course", "course details", "web development"],
    },
  ];

  // Handle search submission
  const handleSearch = () => {
    if (!query.trim()) return;

    // Find the first page that matches the search query
    const matchedPage = pages.find((page) =>
      page.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query.toLowerCase())
      )
    );

    if (matchedPage) {
      navigate(matchedPage.path);
    } else {
      alert("No matching page found!"); // Handle no results
    }
  };

  return (
    <div className="flex items-center border border-gray-300 bg-white rounded-full shadow-sm px-4 py-3 w-full">
      <FiSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full outline-none bg-transparent"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-gray-300 text-gray-70 rounded-full hover:bg-gray-400 transition"
      >
        Search
      </button>
    </div>
  );
};

export default WorkersSearch;
