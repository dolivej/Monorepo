import { Link } from "gatsby";
import React, { ReactNode } from "react";
import ProjectBanner from "./projectBanner";

export const Projects = () => {
  return (
    <div id="projects" className="section">
      <div className="container">
        <div
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto",
            marginTop: "5em",

            borderRadius: "5px",
            maxWidth: "500px",
            padding: "15px",
            background: "linear-gradient(to left, #1581bf -1%, #33ccff 100%)",
          }}
        >
          <h1
            className="is-primary-secondary title is-2"
            style={{ color: "white" }}
          >
            Projects
          </h1>{" "}
        </div>

        <div
          className="Projects"
          style={{
            marginTop: "5em",
          }}
        >
          <div className="tile is-ancestor">
            <div className="tile is-6 is-parent is-vertical">
              <div className="tile is-child " style={{ padding: "10px" }}>
                <ProjectBanner />
              </div>
              <div className="tile is-child " style={{ padding: "10px" }}>
                <ProjectBanner />
              </div>
            </div>

            <div className="tile is-6 is-parent is-vertical">
              <div className="tile is-child " style={{ padding: "10px" }}>
                <ProjectBanner />
              </div>
              <div className="tile is-child " style={{ padding: "10px" }}>
                <ProjectBanner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
