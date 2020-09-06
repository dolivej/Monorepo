/*
/ Component : FAQ
/ Use : Creates a simple FAQ filled with frequently asked questions   
/ Responsiveness : Dynamic 
*/

import React, { ReactNode, useState, forwardRef } from "react";

export interface FAQProps {
  children: ReactNode;
  title: string;
  picture: string;
}

export const FAQ = (props: FAQProps) => {
  const [active, setActive] = useState(false);

  return (
    <section className="section">
      <div className="container py-4">
        <div className="mb-6">
          <div
            className="card block"
            style={{
              borderTop: "solid 4px #fad052",
            }}
          >
            <div
              className="card-content"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                setActive(!active);
              }}
            >
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img className="is-rounded" src={props.picture} alt="" />
                  </figure>
                </div>
                <div className="media-content" style={{ overflow: "hidden" }}>
                  <h3
                    className="title mobileTitle"
                    style={{ userSelect: "none", overflow: "hidden" }}
                  >
                    {props.title}
                  </h3>
                </div>
                <div className="media-right">
                  <i className="fa fa-chevron-down fa-2x" />
                </div>
              </div>
            </div>
            {active && (
              <div className="card-content">
                <div className="container">{props.children}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
