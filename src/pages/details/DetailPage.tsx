import AvatarWithInfo from "@/components/reuseable/avatar/AvatarWithInfo";
import SearchField from "@/components/reuseable/field/SearchField";

const DetailPage = () => {
  return (
    <div className="py-5">
      <SearchField></SearchField>

      {/* Avatar with info */}
      <AvatarWithInfo></AvatarWithInfo>
    </div>
  );
};

export default DetailPage;
