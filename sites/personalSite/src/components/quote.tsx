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
      <div
        className="container py-4 customPadding"
        style={{
          color: "black",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div className="columns">
          <div className="column">
            <p
              className="block mobile-subtitle"
              style={{
                padding: "10px",
                color: "black",
              }}
            >
              {props.quote}
            </p>
            
            <div className="level">
              <div className="level-left">
                <div className='level-item'>
                  <figure className="image is-128x128" style={{}}>
                    <img src={props.img} alt="" />
                  </figure>
                </div>
                <div>
                  <div style={{height:'100%'}}>
                    <h5 className="title is-5" style={{ color: "black" }}>
                      {props.name}
                    </h5>
                    <p className="subtitle" style={{ color: "black" }}>
                      {props.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  );
};

export default Quote;
