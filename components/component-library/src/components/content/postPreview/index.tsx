/*
/ Component : postPreview
/ Use : Creates a post preview with text, links, picture and tags
/ Responsiveness : Dynamic 
*/

import React, { useEffect, useRef, useState } from "react";
import Tags from "../tags";

export interface PostPreviewProps {
  tags: any;
  image: string;
  brief: string;
  title: string;
  about: string;
  links: any;
}

export const PostPreview = (props: PostPreviewProps) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if(typeof window !== 'undefined'){
    setWidth(ref.current!["offsetWidth"]);
    setHeight(ref.current!["offsetHeight"]);
    }
  });

  const sizeCondition =
    width === 0 || (width < 560 && height < 560) || width < 440;

  const imageStyle = {
    background: "url(" + props.image + ")",
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100%",
    height: sizeCondition ? "40%" : "60%",
  };
  return (
    <div
      ref={ref}
      className="card"
      style={{ height: "inherit", width: "inherit" }}
    >
      <div style={imageStyle}>
        {!sizeCondition && (
          <div
            className=""
            style={{
              backgroundColor: "#fad052",
              marginLeft: "0px",
              marginRight: "0px",
              width: "100%",
              overflow: "hidden",
              height: "53px",
            }}
          >
            {props.tags.map((value: any, index: any) => {
              if (!sizeCondition) {
                return (
                  <div style={{ padding: "10px", display: "inline-block" }}>
                    <Tags {...value} />
                  </div>
                );
              }
            })}
          </div>
        )}
        {sizeCondition && (
          <div
            style={{
              backgroundColor: "#fad052",
              marginLeft: "0px",
              marginRight: "0px",
              width: "100%",
              height: "20px",
            }}
          ></div>
        )}
      </div>
      <div
        className="card-content"
        style={{
          width: "100%",
          height: sizeCondition ? "50%" : "30%",
        }}
      >
        <div className="media">
          <div
            className="media-content"
            style={{ minWidth: "50px", overflow: "hidden" }}
          >
            <p
              className="title is-4"
              style={{ borderBottom: "solid", borderColor: "#fad052" }}
            >
              {props.title}
            </p>
            <p className="subtitle is-6">{props.brief}</p>
          </div>

          <div className="media-right">
            <div className="columns is-mobile"></div>
          </div>
        </div>

        <div className="content">{props.about}</div>
      </div>
      <div className="card-content" style={{ width: "100%", height: "10%" }}>
        <div className="content">
          {props.links.map((data: any) => {
            return (
              <a
                href={data.link}
                style={{
                  borderRight: "solid",
                  borderColor: "#fad052",
                  borderWidth: "2px",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                }}
              >
                {data.text}
              </a>
            );
          })}
          <br />
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
