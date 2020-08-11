import React from "react";
import { Link } from "gatsby";
import {
  Nav,
  NavProps,
  NavButton,
  NavHover,
  NavLink,
  NavGroup,
} from "@locnest/component-library";

import SmoothScrolling from "./smoothScrolling";

export default function Navbar() {
  return (
    <Nav>
      <NavGroup align="end">
        <NavGroup align="start">
          <NavHover title="About">
            <NavLink>
              <div
                style={{ color: "#4a4a4a" }}
                onClick={() => {
                  SmoothScrolling.scrollTo("skills");
                }}
              >
                <h2 className="">Skills</h2>
              </div>
            </NavLink>
            <NavLink>
              <div
                style={{ color: "#4a4a4a" }}
                onClick={() => {
                  SmoothScrolling.scrollTo("projects");
                }}
              >
                <h2 className="">Projects</h2>
              </div>
            </NavLink>
            <NavLink>
              <div
                style={{ color: "#4a4a4a" }}
                onClick={() => {
                  SmoothScrolling.scrollTo("analytics");
                }}
              >
                <h2 className="">Analytics</h2>
              </div>
            </NavLink>
          </NavHover>
          <NavHover title="Experience">
            <NavLink>
              <Link to="/Experience/#workhistory" style={{ color: "#4a4a4a" }}>
                <h2 className="">Work History</h2>
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/Experience/#resume" style={{ color: "#4a4a4a" }}>
                <h2 className="">Resume</h2>
              </Link>
            </NavLink>
          </NavHover>
          <NavLink>Blog</NavLink>
          <NavButton>
            <a className="button is-primary is-rounded is-outlined">
              <h2 className="is-primary-font">
                {" "}
                <b>Contact</b>
              </h2>
            </a>
          </NavButton>
        </NavGroup>
      </NavGroup>
    </Nav>
  );
}
