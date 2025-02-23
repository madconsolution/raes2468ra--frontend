import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Routes from "./routes/Routes";
import Navbar from "./shared/navbar/Navbar";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap the entire app inside one Router */}
      <div className="mx-auto w-9/12">
        <MainLayout />
        <Routes />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
