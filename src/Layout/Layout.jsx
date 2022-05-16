import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = {};

export default Layout;
