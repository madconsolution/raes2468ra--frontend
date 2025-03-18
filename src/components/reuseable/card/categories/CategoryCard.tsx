import icon from "@/assets/icons/Icon.svg";
import icon1 from "@/assets/icons/Icon1.svg";
import icon2 from "@/assets/icons/Icon2.svg";

const CategoryCard = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2>Categories</h2>
        <p className="text-base text-blue-500 cursor-pointer">See All</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-3">
        <div className="bg-[#8677EE] p-4 rounded-lg text-center">
          <img
            src={icon1}
            alt="Promo Icon"
            className="w-10 h-10 mb-2 mx-auto"
          />
          <h3 className="text-white">PROMOS</h3>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <img src={icon} alt="Promo Icon" className="w-10 h-10 mb-2 mx-auto" />
          <p className="text-base font-semibold">Icon Design</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <img
            src={icon2}
            alt="Promo Icon"
            className="w-10 h-10 mb-2 mx-auto"
          />
          <p className="text-base font-semibold">App Design</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
