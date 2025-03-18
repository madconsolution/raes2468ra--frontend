import MainLayout from "@/components/layout/MainLayout";

import Navbar from "@/shared/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <Router>
      {/* Wrap the entire app inside one Router */}
      <div className="w-full  md:w-9/12 md:mx-auto">
        <MainLayout />
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
