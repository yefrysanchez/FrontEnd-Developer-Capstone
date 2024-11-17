import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import propTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
