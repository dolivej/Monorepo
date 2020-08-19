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
import { windowIsOnPath } from "../data/helperMethods";

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
                <NavHover
                  title="About"
                  toFunc={() => {
                    return (
                      <Link to="/" style={{ color: "black" }}>
                        <h1>About</h1>
                      </Link>
                    );
                  }}
                >
                  <NavLink>
                    {typeof window !== "undefined" &&
                      ScrollLink &&
                      !(
                        windowIsOnPath("blog") ||
                        windowIsOnPath("contact") ||
                        windowIsOnPath("experience")
                      ) && (
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

                    {(windowIsOnPath("blog") ||
                      windowIsOnPath("contact") ||
                      windowIsOnPath("experience")) && (
                      <Link to="/#skills">
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/#skills");
                          }}
                        >
                          Skills
                        </h2>
                      </Link>
                    )}
                  </NavLink>
                  <NavLink>
                    {typeof window !== "undefined" &&
                      ScrollLink &&
                      !(
                        windowIsOnPath("blog") ||
                        windowIsOnPath("contact") ||
                        windowIsOnPath("experience")
                      ) && (
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

                    {(windowIsOnPath("blog") ||
                      windowIsOnPath("contact") ||
                      windowIsOnPath("experience")) && (
                      <Link to="/#projects">
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/#projects");
                          }}
                        >
                          My Work
                        </h2>
                      </Link>
                    )}
                  </NavLink>
                  <NavLink>
                    {typeof window !== "undefined" &&
                      ScrollLink &&
                      !(
                        windowIsOnPath("blog") ||
                        windowIsOnPath("contact") ||
                        windowIsOnPath("experience")
                      ) && (
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

                    {(windowIsOnPath("blog") ||
                      windowIsOnPath("contact") ||
                      windowIsOnPath("experience")) && (
                      <Link to="/#analytics">
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/#analytics");
                          }}
                        >
                          Analytics
                        </h2>
                      </Link>
                    )}
                  </NavLink>
                </NavHover>
                <NavHover
                  title="Experience"
                  toFunc={() => {
                    return (
                      <Link to="/experience" style={{ color: "black" }}>
                        <h1>Experience</h1>
                      </Link>
                    );
                  }}
                >
                  <NavLink>
                    {typeof window !== "undefined" &&
                      ScrollLink &&
                      windowIsOnPath("experience") && (
                        <ScrollLink
                          activeClass="workhistory"
                          to="workhistory"
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
                              logNavClick("/experience/#workhistory");
                            }}
                          >
                            Work History
                          </h2>
                        </ScrollLink>
                      )}

                    {!windowIsOnPath("experience") && (
                      <Link to="/experience/#workhistory">
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/experience/#workhistory");
                          }}
                        >
                          Work History
                        </h2>
                      </Link>
                    )}
                  </NavLink>
                  <NavLink>
                    {typeof window !== "undefined" &&
                      ScrollLink &&
                      windowIsOnPath("experience") && (
                        <ScrollLink
                          activeClass="resume"
                          to="resume"
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
                              logNavClick("/experience/#resume");
                            }}
                          >
                            Resume
                          </h2>
                        </ScrollLink>
                      )}

                    {!windowIsOnPath("experience") && (
                      <Link to="/experience/#resume">
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/experience/#resume");
                          }}
                        >
                          Resume
                        </h2>
                      </Link>
                    )}
                  </NavLink>
                </NavHover>
                <NavLink>
                  <Link to="/blog" style={{ color: "black" }}>
                    Blog
                  </Link>
                </NavLink>
                <NavButton>
                  <Link to="/contact">
                    <div
                      className="button is-primary is-rounded is-outlined"
                      onClick={() => {
                        logNavClick("/contact");
                      }}
                    >
                      <h2 className="is-primary-font">
                        {" "}
                        <b>Contact</b>
                      </h2>
                    </div>
                  </Link>
                </NavButton>
              </NavGroup>
            </NavGroup>
          </Nav>
        );
      }}
    </Context.Consumer>
  );
}
