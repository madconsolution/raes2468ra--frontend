import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
const ContractorsWorkersCard = () => {
  return (
    <div className="my-6">
      <div className="flex justify-between items-center">
        <h2>Contractors/Workers</h2>
        <p className="text-base cursor-pointer">See All</p>
      </div>
      <div className="mt-4 space-y-4">
        {/* Worker Card */}
        <div className="bg-[#EBE8FF] rounded-lg shadow-md flex items-center gap-4">
          <div className="w-1/3 h-30 bg-[#D8D8D8] rounded-l-lg"></div>
          <div className="py-4 space-y-1">
            <h4 className="font-semibold text-lg">Kyle Gee</h4>
            <div className="text-base flex items-center gap-2">
              <div className="flex gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>{" "}
              <h6 className="text-[12px]">5.0 (21 Reviews)</h6>
            </div>
            <div className="flex items-center gap-1">
              <IoMdTime className="text-[#8677ee]" />
              <h6 className="text-[12px]">25 class</h6>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF2D5] rounded-lg shadow-md flex items-center gap-4">
          <div className="w-1/3 h-30 bg-[#D8D8D8] rounded-l-lg"></div>
          <div className="py-4 space-y-1">
            <h4 className="font-semibold text-lg">Mobile Softeware</h4>
            <div className="text-base flex items-center gap-2">
              <div className="flex gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>{" "}
              <h6 className="text-[12px]">5.0 (12 Reviews)</h6>
            </div>
            <div className="flex items-center gap-1">
              <IoMdTime className="text-[#E3A835]" />
              <h6 className="text-[12px]">21 class</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorsWorkersCard;
