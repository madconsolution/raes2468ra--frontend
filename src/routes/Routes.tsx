import ChatPage from "@/pages/Chat/ChatPage";
import HomePage from "@/pages/home/HomePage";
import OrderPage from "@/pages/order/OrderPage";

import SavedPage from "@/pages/saved/SavedPage";
import SettingPage from "@/pages/setting/SettingPage";
import { Route, Routes as RouterRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/saved" element={<SavedPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/setting" element={<SettingPage />} />
    </RouterRoutes>
  );
};

export default Routes;
