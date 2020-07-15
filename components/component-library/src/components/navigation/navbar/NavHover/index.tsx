import React, { ReactNode } from "react";

export interface NavHoverProps {
  children?: ReactNode;
  title: string;
}
export const NavHover = (props: NavHoverProps) => {
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">
        <h1 className="is-primary-font">{props.title}</h1>
      </a>

      <div className="navbar-dropdown">{props.children}</div>
    </div>
  );
};

export default NavHover;
