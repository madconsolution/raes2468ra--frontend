import AvatarWithInfo from "@/components/reuseable/avatar/AvatarWithInfo";
import SearchField from "@/components/reuseable/field/SearchField";
import SkeletonComponent from "@/components/reuseable/Skeleton/Skeleton";
import SliderCommon from "@/components/reuseable/slider/SliderCommon";

const DetailPage = () => {
  return (
    <div className="py-5">
      <SearchField></SearchField>
      <SkeletonComponent></SkeletonComponent>
      {/* Avatar with info */}
      <div className="bg-[#ffffff] rounded-t-3xl -mt-10 pt-5">
        <AvatarWithInfo></AvatarWithInfo>
        <SliderCommon></SliderCommon>
      </div>
    </div>
  );
};

export default DetailPage;
