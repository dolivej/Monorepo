/*
/ Component : Footer
/ Use : Creates a simple footer 
/ Responsiveness : Dynamic 
*/

import React from "react";

export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <a className="title is-4" href="#">
                ⚡ David Olive
              </a>
            </div>
          </div>
          <div className="level-right">
            <a className="level-item" href="/">
              About
            </a>
            <a className="level-item" href="/experience">
              Experience
            </a>
            <a className="level-item" href="/blog">
              Blog
            </a>
            <a className="level-item" href="/contact">
              Contact
            </a>
          </div>
        </div>
        <hr style={{ backgroundColor: "#fad052" }} />
        <div className="columns">
          <div className="column">
            <div className="buttons">
              <a
                className="button"
                href="https://www.linkedin.com/in/dmolive/"
                target="_blank"
                style={{ padding: "4px" }}
              >
                <figure className="image is-24x24">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/768px-Linkedin_icon.svg.png" />
                </figure>
              </a>
              <a
                className="button"
                href="https://github.com/dolivej"
                target="_blank"
                style={{ padding: "4px" }}
              >
                <figure className="image is-24x24">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" />
                </figure>
              </a>
            </div>
          </div>
          <div className="column has-text-centered has-text-right-tablet">
            <p className="subtitle is-6">
              © 2020 David Olive. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
