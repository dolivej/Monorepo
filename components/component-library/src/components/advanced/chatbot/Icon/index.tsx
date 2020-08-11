import React from "react";

export interface IconProps {
  onClick: () => void;
  icon: string;
  roundAmount: string;
}

export const Icon = (props: IconProps) => {
  let style = {
    borderRadius: props.roundAmount,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.2) 0px 2px 24px",
    width: "60px",
    height: "60px",
    cursor: "pointer",
  };

  return (
    <div className="icon-holder">
      <div className="icon-holder-inside">
        <div className="chatIcon" onClick={props.onClick} style={style}>
          <span className="icon chatIcon" style={style}>
            <i className={props.icon}></i>
          </span>
        </div>
      </div>
    </div>
  );
};
