import { Link } from "gatsby";
import React, { ReactNode } from "react";
import Tier from "../Tier";

export const Landing = () => {
  return (
    <div
      id="skills"
      className="section is-primary-background"
      style={{
        background: "linear-gradient(to left, #1581bf -1%, #33ccff 100%)",
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <h1 className="is-primary-font title is-2" style={{ color: "white" }}>
            A bit about me.
          </h1>{" "}
          <p
            className="is-tertiary-font subtitle is-9"
            style={{ color: "white", marginTop: "40px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
          </p>
        </div>

        <div style={{ marginTop: "75px" }}>
          <Tier />
        </div>
      </div>
    </div>
  );
};

export default Landing;
