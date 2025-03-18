import DetailPage from "@/pages/details/DetailPage";
import HomePage from "@/pages/home/HomePage";
import InfoPage from "@/pages/info/InfoPage";
import WorkersSearchPage from "@/pages/search/WorkersSearchPage";
import TermsAndConditions from "@/pages/terms/TermsAndConditonsPage";

import { Route, Routes as RouterRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <div className=" md:ml-[30%]  ">
      <RouterRoutes>
        <Route path="/" element={<InfoPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="/workers-search" element={<WorkersSearchPage />} />
        <Route path="/terms-condition" element={<TermsAndConditions />} />
      </RouterRoutes>
    </div>
  );
};

export default Routes;
