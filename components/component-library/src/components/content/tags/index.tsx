/*
/ Component : Tag
/ Use : Creates a simple tag with a picture and name   
/ Responsiveness : Static 
*/

import React from "react";

export interface TagProps {
  size: number;
  icon: string;
  tagName: string;
  tagLink: string;
  tagColor: string;
  textColor: string;
}

export const Tag = (props: TagProps) => {
  let size = "";
  let sizePicture = "";

  if (props.size === 1) {
    size = "is-normal";
    sizePicture = "is-16x16";
  } else if (props.size === 2) {
    size = "is-medium";
    sizePicture = "is-16x16";
  } else {
    size = "is-large";
    sizePicture = "is-24x24";
  }

  return (
    <div style={{ display: "inline-block" }}>
      <a className="tags has-addons">
        <span className={"tag " + size}>
          <figure className={"image " + sizePicture}>
            <img src={props.icon} />
          </figure>
        </span>
        <span
          className={"tag " + size}
          style={{ color: props.textColor, backgroundColor: props.tagColor }}
        >
          {props.tagName}
        </span>
      </a>
    </div>
  );
};

export default Tag;
