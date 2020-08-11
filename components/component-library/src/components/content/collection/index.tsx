/*
/ Component : Collection
/ Use : Creats a css grid section based on provided mapping, item templates and data
/ Responsiveness : Dynamic 
*/

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";

export interface CollectionProps {
  sizemap: string;
  template: any;
  data: any;
  spacing: string;
  minMobileHeight?: string;
}

export const useWindowSize = () => {
  if (window) {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  return [0, 0];
};

export const Collection = (props: CollectionProps) => {
  const ref = useRef(null);
  const [width, height] = useWindowSize();

  const sizeCondition = width === 0 || width < 600;

  const myStyle = {
    height: "100%",
    width: "100%",
    display: sizeCondition ? "" : "grid",
    gridTemplateAreas: sizeCondition ? "" : props.sizemap,
    gridTemplateRows: sizeCondition ? "" : "auto",
    gridGap: sizeCondition ? "" : props.spacing,
    padding: props.spacing,
    overflow: sizeCondition ? "scroll" : "",
  };
  return (
    <div className="customScrollBar" ref={ref} style={myStyle}>
      {props.data.map((data: any, index: any) => {
        if (sizeCondition) {
          return (
            <div
              style={{
                paddingBottom: props.spacing,
                height: props.minMobileHeight,
              }}
            >
              {" "}
              {props.template(data)}
            </div>
          );
        }
        return props.template(data);
      })}
    </div>
  );
};

export default Collection;
