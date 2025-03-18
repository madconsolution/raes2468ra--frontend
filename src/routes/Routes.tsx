import DetailPage from "@/pages/details/DetailPage";
import HomePage from "@/pages/home/HomePage";
import InfoPage from "@/pages/info/InfoPage";
import WorkersSearchPage from "@/pages/search/WorkersSearchPage";

import { Route, Routes as RouterRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<InfoPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/details" element={<DetailPage />} />
      <Route path="/workers-search" element={<WorkersSearchPage />} />
    </RouterRoutes>
  );
};

export default Routes;
