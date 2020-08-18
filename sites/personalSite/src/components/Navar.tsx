import React from "react";
import { Link } from "gatsby";
import {
  Nav,
  NavProps,
  NavButton,
  NavHover,
  NavLink,
  NavGroup,
  Context,
} from "@locnest/component-library";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <Context.Consumer>
      {({ logger, userFlow, setUserFlow }: any) => {
        const logNavClick = (path: string) => {
          setTimeout(function () {
            userFlow.push({
              name: "Clicked Nav",
              properties: { path: path, group: "test" },
            });
            setUserFlow(userFlow);
            logger.loggerService.trackEvent({
              name: "Clicked Nav",
              properties: { path: path, group: "test" },
            });
          }, 4000);
        };

        return (
          <Nav>
            <NavGroup align="end">
              <NavGroup align="start">
                <NavHover title="About">
                  <NavLink>
                    {typeof window !== "undefined" && ScrollLink && (
                      <ScrollLink
                        activeClass="skills"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={1000}
                      >
                        {" "}
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/#skills");
                          }}
                        >
                          Skills
                        </h2>
                      </ScrollLink>
                    )}
                  </NavLink>
                  <NavLink>
                    {typeof window !== "undefined" && ScrollLink && (
                      <ScrollLink
                        activeClass="projects"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={1000}
                      >
                        {" "}
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/#projects");
                          }}
                        >
                          My Work
                        </h2>
                      </ScrollLink>
                    )}
                  </NavLink>
                  <NavLink>
                    {typeof window !== "undefined" && ScrollLink && (
                      <ScrollLink
                        activeClass="analytics"
                        to="analytics"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={1000}
                      >
                        {" "}
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/#analytics");
                          }}
                        >
                          Analytics
                        </h2>
                      </ScrollLink>
                    )}
                  </NavLink>
                </NavHover>
                <NavHover title="Experience">
                  <NavLink>
                    <Link
                      to="/Experience/#workhistory"
                      style={{ color: "#4a4a4a" }}
                    >
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
                  <a
                    className="button is-primary is-rounded is-outlined"
                    onClick={() => {
                      logNavClick("/contact");
                    }}
                  >
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
      }}
    </Context.Consumer>
  );
}
