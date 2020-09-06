import React from "react";
import Link from "gatsby-link";
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
          setTimeout(function() {
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
                      <a href="/" style={{ color: "black" }}>
                        <h1>About</h1>
                      </a>
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
                      <a href="/#skills">
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/#skills");
                          }}
                        >
                          Skills
                        </h2>
                      </a>
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
                            Projects
                          </h2>
                        </ScrollLink>
                      )}

                    {(windowIsOnPath("blog") ||
                      windowIsOnPath("contact") ||
                      windowIsOnPath("experience")) && (
                      <a href="/#projects">
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/#projects");
                          }}
                        >
                          Projects
                        </h2>
                      </a>
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
                      <a href="/#analytics">
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/#analytics");
                          }}
                        >
                          Analytics
                        </h2>
                      </a>
                    )}
                  </NavLink>
                </NavHover>
                <NavHover
                  title="Experience"
                  toFunc={() => {
                    return (
                      <a href="/experience" style={{ color: "black" }}>
                        <h1>Experience</h1>
                      </a>
                    );
                  }}
                >
                  <NavLink>
                    {typeof window !== "undefined" &&
                      ScrollLink &&
                      windowIsOnPath("experience") && (
                        <ScrollLink
                          activeClass="testimonials"
                          to="testimonials"
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
                              logNavClick("/experience/#testimonials");
                            }}
                          >
                            Testimonials
                          </h2>
                        </ScrollLink>
                      )}

                    {!windowIsOnPath("experience") && (
                      <a href="/experience/#testimonials">
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/experience/#testimonials");
                          }}
                        >
                          Testimonials
                        </h2>
                      </a>
                    )}
                  </NavLink>
                  <NavLink></NavLink>
                  <NavLink>
                    {typeof window !== "undefined" &&
                      ScrollLink &&
                      windowIsOnPath("experience") && (
                        <ScrollLink
                          activeClass="testimonials"
                          to="testimonials"
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
                            Resume
                          </h2>
                        </ScrollLink>
                      )}

                    {!windowIsOnPath("experience") && (
                      <a href="/experience/#workhistory">
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/experience/#workhistory");
                          }}
                        >
                          Resume
                        </h2>
                      </a>
                    )}
                  </NavLink>
                  {/* <NavLink>
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
                      <a href="/experience/#resume">
                        <h2
                          className=""
                          style={{ color: "#4a4a4a" }}
                          onClick={() => {
                            logNavClick("/experience/#resume");
                          }}
                        >
                          Resume
                        </h2>
                      </a>
                    )}
                  </NavLink> */}
                </NavHover>
                {/* <NavLink>
                  <Link to="/blog" style={{ color: "black" }}>
                    Blog
                  </Link>
                </NavLink> */}
                <NavButton>
                  <a href="/contact">
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
