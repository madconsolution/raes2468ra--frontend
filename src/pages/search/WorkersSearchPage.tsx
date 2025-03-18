import CategoryCard from "@/components/reuseable/card/categories/CategoryCard";
import ContractorsWorkersCard from "@/components/reuseable/card/categories/ContractorsWorkersCard";
import WorkersSearch from "@/components/search/WorkersSearch";
import TagsSections from "@/components/sections/TagsSections";

const WorkersSearchPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="p-4 w-full h-full max-w-md md:max-w-3xl md:h-[90vh] md:w-[50%] shadow-lg rounded-lg overflow-auto">
          <div className="flex justify-end items-center">
            <h2 className="text-xl font-bold mx-auto">Search all workers</h2>
            <div>
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <h3 className="text-2xl pt-4 pb-3">
            View Workers with their promo Pricing
          </h3>
          {/* Search Section */}
          <WorkersSearch />
          {/* Category Card */}
          <CategoryCard />
          {/* Tags Sections */}
          <TagsSections />
          {/* Contractors Workers Card */}
          <ContractorsWorkersCard />
        </div>
      </div>
    </>
  );
};

export default WorkersSearchPage;
