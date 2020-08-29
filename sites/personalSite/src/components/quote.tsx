import React from "react";

export interface QuoteProps {
  img: string;
  quote: any;
  name: string;
  title: string;
}

import "./index.css";

const Quote = (props: QuoteProps) => {
  return (
    <section className="section">
      <div
        className="container has-text-centered py-4 customPadding"
        style={{
          color: "black",
          backgroundColor: "white",
          borderRadius: "5px",
          maxWidth: "600px",
        }}
      >
        <div className="columns">
          <div className="column">
            <div className="level">
              <div className="level-item">
                <figure className="image is-128x128" style={{}}>
                  <img src={props.img} alt="" />
                </figure>
              </div>
            </div>
            <p
              className="block mobile-subtitle"
              style={{
                padding: "10px",
                color: "black",
              }}
            >
              {props.quote}
            </p>
            <br className="hideOnMobile" />
            <h5 className="title is-5" style={{ color: "black" }}>
              {props.name}
            </h5>
            <p className="subtitle" style={{ color: "black" }}>
              {props.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
