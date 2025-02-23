import BookmarkPage from "@/pages/Bookmark/BookmarkPage";
import CalendarPage from "@/pages/Calendar/CalendarPage";
import HomePage from "@/pages/home/HomePage";
import ProfilePage from "@/pages/profile/ProfilePage";
import { Route, Routes as RouterRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bookmarks" element={<BookmarkPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </RouterRoutes>
  );
};

export default Routes;
