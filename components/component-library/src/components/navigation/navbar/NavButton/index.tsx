import React, { ReactNode } from "react";

export interface NavButtonProps {
  children?: ReactNode;
}
export const NavButton = (props: NavButtonProps) => {
  return (
    <div className="navbar-item">
      <div className="buttons">{props.children}</div>
    </div>
  );
};

export default NavButton;
