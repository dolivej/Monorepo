import React from "react";

export interface LogoShowcaseProps {
  images: any;
  links: any;
  title: any;
}

export const LogoShowcase = (props: LogoShowcaseProps) => {
  return (
    <section className="section">
      <div className="container has-text-centered py-4">
        <h2 className="title mb-6">{props.title}</h2>
        <div className="columns" style={{ backgroundColor: "#fafafa" }}>
          {props.images.map((logo: any, index: number) => {
            return (
              <div
                className="column"
                style={{ padding: "50px", textAlign: "center" }}
              >
                <a
                  href={props.links[index]}
                  target="_blank"
                  style={{ display: "inline-block" }}
                >
                  <figure className="image is-128x128">
                    <img src={logo} />
                  </figure>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
