/*
/ Component : FAQ
/ Use : Creates a simple FAQ filled with frequently asked questions   
/ Responsiveness : Dynamic 
*/

import React, { ReactNode, useState } from "react";

export interface ExpandableTagProps {
  children: ReactNode;
  title: string;
  picture: string;
  backgroundColor: string;
}

export const ExpandableTag = (props: ExpandableTagProps) => {
  const [active, setActive] = useState(false);

  return (
    <div
      style={{
        display: "inline-block",
        boxShadow: active ? "10px 10px 18px -12px rgba(0,0,0,0.33)" : "",
      }}
      onClick={() => {
        setActive(!active);
      }}
    >
      <div
        className="tags are-medium has-addons"
        style={{
          cursor: "pointer",
          display: "inline-block",
        }}
      >
        <span
          className="tag"
          style={{
            backgroundColor: props.backgroundColor,
          }}
        >
          <i className={"fa " + props.picture}></i>
        </span>
        <span
          className="tag"
          style={{ userSelect: "none", backgroundColor: "whitesmoke" }}
        >
          {props.title}
        </span>
      </div>
      {active && (
        <div style={{ padding: "10px", marginTop: "-20px" }}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default ExpandableTag;
