import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { Nav, NavProps } from "./index";
import NavButton from "../NavButton/index";
import NavHover from "../NavHover/index";
import NavLink from "../NavLink/index";
import NavGroup from "../NavGroup/index";

storiesOf("Navigation/Navbar", module)
  .addDecorator(withKnobs)
  .add("example", () => (
    <div>
      <Nav>
        <NavGroup align="end">
          <NavGroup align="start">
            <NavHover title="About">
              <NavLink>
                {" "}
                <h2 className="">Skills</h2>
              </NavLink>
              <NavLink>
                <h2 className="">Projects</h2>
              </NavLink>
              <NavLink>
                <h2 className="">Analytics</h2>
              </NavLink>
            </NavHover>
            <NavHover title="Experience">
              <NavLink>
                <h2 className="">Work History</h2>
              </NavLink>
              <NavLink>
                {" "}
                <h2 className="">Projects</h2>
              </NavLink>
              <NavLink>
                {" "}
                <h2 className="">Resume</h2>
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
    </div>
  ));
