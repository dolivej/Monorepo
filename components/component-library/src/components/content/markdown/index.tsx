/*
/ Component : markdown
/ Use : Displays markdown using react-markdown
/ Responsiveness : Dynamic
*/

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export interface MarkdownProps {
  markdownString: string;
  width?: string;
  height?: string;
}

const ImageRender = (props: any) => {
  const [fullSize, setFullSize] = useState(false);
  const handleClick = () => {
    setFullSize(!fullSize);
  };
  return (
    <img
      style={{ width: fullSize ? "100%" : "", height: fullSize ? "100%" : "" }}
      alt={props.alt}
      src={props.src}
      onClick={handleClick}
    />
  );
};

export const Markdown = (props: MarkdownProps) => {
  const renderers = {
    image: ImageRender,
  };

  return (
    <div
      style={{
        width: props.width ? props.width : "100%",
        height: props.height ? props.height : "100%",
        overflow: props.width ? "scroll" : "",
      }}
    >
      <ReactMarkdown source={props.markdownString} renderers={renderers} />
    </div>
  );
};

export default Markdown;
