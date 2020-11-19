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
                          activeClass="about"
                          to="about"
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
                              logNavClick("/#about");
                            }}
                          >
                            About
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
                 
    
                <NavButton>
                  <a href="/contact">
                    <div
                      className="button is-primary is-outlined"
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
