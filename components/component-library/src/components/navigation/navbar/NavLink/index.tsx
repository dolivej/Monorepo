import React, { ReactNode } from "react";

export interface NavLinkProps {
  children?: ReactNode;
}
export const NavLink = (props: NavLinkProps) => {
  return <a className="navbar-item">{props.children}</a>;
};

export default NavLink;
