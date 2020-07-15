import React, { ReactNode } from "react";

export interface NavGroupProps {
  children?: ReactNode;
  align: string;
}
export const NavGroup = (props: NavGroupProps) => {
  return <div className={"navbar-" + props.align}>{props.children}</div>;
};

export default NavGroup;
