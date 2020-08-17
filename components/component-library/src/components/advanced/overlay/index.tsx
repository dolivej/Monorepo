import React, { ReactNode } from "react";

export interface overlayProps {
  active?: boolean;
  children: ReactNode;
}

export const Overlay = (props: overlayProps) => {
  return (
    <div
      style={{
        position: "fixed",
        display: props.active ? "block" : "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.2)",
        zIndex: 20,
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          backgroundColor: "white",
          boxShadow: "10px 10px 26px -10px rgba(0,0,0,0.76)",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
