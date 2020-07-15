import React from "react";
import "@locnest/component-library/lib/styles/componentstyles.sass";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import Navbar from "../NavBar";

export type LayoutProps = {
  children: any;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
  </>
);
