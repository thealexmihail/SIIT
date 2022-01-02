import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "./_layout.scss";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
