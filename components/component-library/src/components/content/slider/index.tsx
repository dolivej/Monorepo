import React, { useState } from "react";

export interface SliderProps {
  slides: any;
  color: string;
  thickness: string;
}

export const Slider = (props: SliderProps) => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-(100 * (props.slides.length - 1))) : setX(x + 100);
  };

  const goRight = () => {
    x === -(100 * (props.slides.length - 1)) ? setX(0) : setX(x - 100);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        display: "flex",
        alignContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {props.slides.map((item: any, index: number) => {
        return (
          <div
            key={index}
            style={{
              minWidth: "100%",
              height: "100%",
              transform: "translateX(" + x + "%)",
              transition: "0.5s",
            }}
            onMouseDown={() => {}}
          >
            {item}
          </div>
        );
      })}
      <div
        className="columns  has-text-centered is-mobile"
        style={{
          border: props.thickness + " solid " + props.color,
          borderRadius: "10px",
          width: "300px",
          height: "26px",
          position: "absolute",
          bottom: "15px",
          margin: "-100px 0 0 -150px",
          left: "50%",
        }}
      >
        {props.slides.map((item: any, index: number) => {
          return (
            <div
              className="column fade-in"
              style={{
                padding: "0px",
              }}
            >
              <button
                className="sliderButton"
                style={{
                  width: "17px",
                  height: "17px",
                  borderRadius: "50%",
                  border: "solid " + props.thickness + " " + props.color,
                  cursor: "pointer",
                  transition: "0.5s",
                  backgroundColor: -(100 * index) === x ? "white" : "",
                }}
                onClick={() => {
                  setX(-(100 * index));
                }}
              ></button>
            </div>
          );
        })}
      </div>

      <button
        className="sliderButton"
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          width: "7vw",
          height: "7vw",
          maxWidth: "60px",
          maxHeight: "60px",
          marginLeft: "10px",
          borderRadius: "50%",
          border: "solid " + props.thickness + " " + props.color,
          cursor: "pointer",
          transition: "0.5s",
        }}
        onClick={() => {
          goLeft();
        }}
      >
        <i className="fa fa-chevron-left" style={{ color: props.color }}></i>
      </button>
      <button
        className="sliderButton"
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          width: "7vw",
          height: "7vw",
          maxWidth: "60px",
          maxHeight: "60px",
          marginRight: "10px",
          borderRadius: "50%",
          border: "solid " + props.thickness + " " + props.color,
          cursor: "pointer",
          transition: "0.5s",
        }}
        onClick={() => {
          goRight();
        }}
      >
        <i className="fa fa-chevron-right" style={{ color: props.color }}></i>
      </button>
    </div>
  );
};
