import React, { ReactNode } from "react";
import { Link } from "gatsby";
import {
  Nav,
  NavProps,
  NavButton,
  NavHover,
  NavLink,
  NavGroup,
} from "@locnest/component-library/lib/components";

export const Navbar = () => {
  return (
    <Nav>
      <NavGroup align="end">
        <NavGroup align="start">
          <NavHover title="About">
            <NavLink>
              <h1 className="is-primary-font">Skills</h1>
            </NavLink>
            <NavLink>
              {" "}
              <h1 className="is-primary-font ">Projects</h1>
            </NavLink>
            <NavLink>
              {" "}
              <h1 className="is-primary-font ">Analytics</h1>
            </NavLink>
          </NavHover>
          <NavHover title="Experience">
            <NavLink>
              {" "}
              <h1 className="is-primary-font ">Work History</h1>
            </NavLink>
            <NavLink>
              {" "}
              <h1 className="is-primary-font ">Projects</h1>
            </NavLink>
            <NavLink>
              {" "}
              <h1 className="is-primary-font ">Resume</h1>
            </NavLink>
          </NavHover>
          <NavLink>
            <h1 className="is-primary-font is-primary-color">Blog</h1>
          </NavLink>
          <NavButton>
            <a className="button is-primary is-outlined">
              <strong>
                <h1 className="is-primary-font">
                  <b>Contact</b>
                </h1>
              </strong>
            </a>
          </NavButton>
        </NavGroup>
      </NavGroup>
    </Nav>
  );
};

export default Navbar;
