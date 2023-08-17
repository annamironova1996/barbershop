import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const FooterLayout = () => {
  return (
    <>
      <Footer />
      <Outlet />
    </>
  );
};

export default FooterLayout;
