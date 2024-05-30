import { Outlet } from "react-router-dom";
import Header from "../Static/Header";
// import Footer from "../Static/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
