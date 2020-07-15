import React, { ReactNode } from "react";
import { Link } from "gatsby";

export const Tier = () => {
  return (
    <div
      className="columns "
      style={{
        minHeight: "300px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <div
        className="column"
        style={{
          margin: "10px",
          backgroundColor: "white",
          boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "5px",
        }}
      >
        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
          <img
            src="https://i.ibb.co/PhqxBvT/028-code.png"
            style={{ maxWidth: "150px" }}
          />
          <h1 className="is-primary-font title is-2" style={{ height: "90px" }}>
            Full-Stack Development
          </h1>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ padding: "40px" }}
          >
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            minus molestiae officia! Harum,
          </p>

          <h1
            className="is-primary-font title is-4"
            style={{ color: "#1cc6ff" }}
          >
            Things I enjoy developing:
          </h1>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ padding: "20px" }}
          >
            Lorem, Ipsum, Lorem, Ipsum
          </p>
          <h1
            className="is-primary-font title is-4"
            style={{
              color: "#1cc6ff",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            My Stack:
          </h1>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ paddingBottom: "0px" }}
          >
            1 Lorem Ipsum is Lorem
          </p>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ paddingBottom: "0px" }}
          >
            1 Lorem Ipsum is Lorem
          </p>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ paddingBottom: "0px" }}
          >
            1 Lorem Ipsum is Lorem
          </p>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ paddingBottom: "0px" }}
          >
            1 Lorem Ipsum is Lorem
          </p>

          <button
            className="button is-primary is-medium"
            style={{
              marginTop: "1em",
            }}
          >
            <h3 className="is-tertiary-font">See Examples!</h3>
          </button>
        </div>
      </div>
      <div
        className="column"
        style={{
          margin: "10px",
          backgroundColor: "white",
          boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "5px",
        }}
      >
        {" "}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://i.ibb.co/D9zVWwm/027-statistics.png"
            style={{ maxWidth: "150px" }}
          />
          <h1 className="is-primary-font title is-2" style={{ height: "90px" }}>
            Analytics
          </h1>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ padding: "40px" }}
          >
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            minus molestiae officia! Harum,
          </p>

          <h1
            className="is-primary-font title is-4"
            style={{ color: "#1cc6ff" }}
          >
            Stats I love to track:
          </h1>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ padding: "20px" }}
          >
            Lorem, Ipsum, Lorem, Ipsum
          </p>

          <h1
            className="is-primary-font title is-4"
            style={{
              color: "#1cc6ff",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            My Stack:
          </h1>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ paddingBottom: "0px" }}
          >
            1 Lorem Ipsum is Lorem
          </p>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ paddingBottom: "0px" }}
          >
            1 Lorem Ipsum is Lorem
          </p>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ paddingBottom: "0px" }}
          >
            1 Lorem Ipsum is Lorem
          </p>
          <p
            className="is-tertiary-font subtitle is-8"
            style={{ paddingBottom: "0px" }}
          >
            1 Lorem Ipsum is Lorem
          </p>

          <button
            className="button is-primary is-medium"
            style={{
              marginTop: "1em",
            }}
          >
            <h3 className="is-tertiary-font">See Examples!</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tier;
