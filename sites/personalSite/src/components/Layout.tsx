import React, { ReactNode } from "react";
import NavBar from "./Navar";
import { Footer, ContextProvider } from "@locnest/component-library";
import PropTypes from "prop-types";
import { globalHistory } from "@reach/router";

const Layout = ({ children }: any) => {
  const loggerProps = {
    instrumentationKey: process.env.GATSBY_APPINSIGHTS_API,
    history: globalHistory,
  };

  return (
    <>
      <ContextProvider loggerProps={loggerProps}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </ContextProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
