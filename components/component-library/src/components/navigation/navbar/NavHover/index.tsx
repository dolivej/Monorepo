import React, { ReactNode } from "react";

export interface NavHoverProps {
  children?: ReactNode;
  title: string;
  toFunc: any;
}
export const NavHover = (props: NavHoverProps) => {
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">{props.toFunc()}</a>

      <div className="navbar-dropdown">{props.children}</div>
    </div>
  );
};

export default NavHover;
