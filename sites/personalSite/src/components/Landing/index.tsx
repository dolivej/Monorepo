import { Link } from "gatsby";
import React, { ReactNode } from "react";
import Typical from "react-typical";
import { useSpring, animated } from "react-spring";

import "./landing.css";

const calc = (x: any, y: any) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: any, y: any) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x: any, y: any) =>
  `translate3d(${x / 8 + 160}px,${y / 5 + 270}px,0)`;
const trans3 = (x: any, y: any) =>
  `translate3d(${x / 6 - 100}px,${y / 6 + 270}px,0)`;
const trans4 = (x: any, y: any) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

export const Landing = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div
      id="landing"
      className="section"
      style={{ minHeight: "900px" }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="containerr" style={{ minHeight: "700px" }}>
              <animated.div
                class="card1"
                style={{
                  transform: props.xy.interpolate(trans1),
                }}
              />
              <animated.div
                class="card4"
                style={{ transform: props.xy.interpolate(trans4) }}
              />
              <animated.div
                class="card3"
                style={{ transform: props.xy.interpolate(trans3) }}
              />
              <animated.div
                class="card2"
                style={{ transform: props.xy.interpolate(trans2) }}
              />
            </div>
          </div>
          <div className="column" style={{ paddingTop: "10em" }}>
            <div className="container">
              <h1 className="title is-1 is-primary-font">Hi, Im David.</h1>
              <h1 className="title is-1 is-primary-font">
                Full-Stack Developer & Analytics Enthusiast
              </h1>
              <div
                className="is-primary-background"
                style={{
                  borderRadius: "5px",
                  width: "100%",
                  padding: "15px",
                  background:
                    "linear-gradient(to left, #1581bf -1%, #33ccff 100%)",
                }}
              >
                <h1
                  className="title is-3 is-tertiary-font"
                  style={{
                    color: "white",
                  }}
                >
                  I code solutions that
                  <Typical
                    steps={[
                      " are data driven. 🖥️",
                      500,
                      " are re-usable. ♻️",
                      500,
                      " are modular. 🔩",
                      500,
                      " track themselves. 📊",
                      20000,
                    ]}
                    loop={Infinity}
                    wrapper="span"
                  />
                </h1>
              </div>
              <button
                className="button is-outlined is-primary is-large "
                style={{
                  marginTop: "1.5em",
                }}
              >
                <h3 className="is-tertiary-font">See My Work!</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
