import AvatarWithInfo from "@/components/reuseable/avatar/AvatarWithInfo";
import SearchField from "@/components/reuseable/field/SearchField";
import SliderCommon from "@/components/reuseable/slider/SliderCommon";

const DetailPage = () => {
  return (
    <div className="py-5">
      <SearchField></SearchField>

      {/* Avatar with info */}
      <AvatarWithInfo></AvatarWithInfo>
      <SliderCommon></SliderCommon>
    </div>
  );
};

export default DetailPage;
