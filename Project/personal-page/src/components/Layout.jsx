import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "./ScrollToTop";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Layout;
