import DetailPage from "@/pages/details/DetailPage";
import HomePage from "@/pages/home/HomePage";
import InfoPage from "@/pages/info/InfoPage";

import { Route, Routes as RouterRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<InfoPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/detail" element={<DetailPage />} />

      {/* <Route path="/saved" element={<SavedPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/setting" element={<SettingPage />} /> */}
    </RouterRoutes>
  );
};

export default Routes;
