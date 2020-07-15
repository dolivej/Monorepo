import { Link } from "gatsby";
import React, { ReactNode } from "react";
import { useSpring, animated } from "react-spring";

const calc = (x: any, y: any) => [
  -(y - window.innerHeight) / 10000,
  (x - window.innerWidth) / 10000,
  1.1,
];

const trans = (x: any, y: any, s: any) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const projectBanner = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 90 },
  }));

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
          width: "100%",
          height: "100%",
        }}
      >
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by2">
              <img
                src="https://image.freepik.com/free-vector/travel-landing-page-template-beautiful-design_23-2148160343.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content" style={{ minWidth: "200px" }}>
                <p className="title is-4">Project Name</p>
                <p className="subtitle is-6">Brief Description</p>
              </div>

              <div className="media-right">
                <div className="columns is-mobile">
                  <div className="column">
                    <figure className="image is-48x48">
                      <img
                        src="https://www.cloudanalogy.co.uk/wp-content/uploads/2019/06/react.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="column">
                    <figure className="image is-48x48">
                      <img
                        src="https://www.saashub.com/images/app/service_logos/6/4ad2b9991817/large.png?1525414082"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>

                  <div className="column">
                    <figure className="image is-48x48">
                      <img
                        src="https://www.vaisulweb.com/wp-content/uploads/2019/02/azure_logo_794_new.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="column">
                    <figure className="image is-48x48">
                      <img
                        src="https://pbs.twimg.com/profile_images/1149708719178993664/3Hb8W4aX.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>.<a href="#"> #css</a>{" "}
              <a href="#">#responsive</a>
              <br />
              <br />
              <br />
              <a href="#">Read More </a>|<a href="#"> Github</a> |
              <a href="#"> Visit</a>
              <br />
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default projectBanner;
