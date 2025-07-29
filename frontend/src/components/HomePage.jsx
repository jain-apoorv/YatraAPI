import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
