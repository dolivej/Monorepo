import React from "react";
import { Overlay } from "@locnest/component-library";
import Typical from "react-typical";

export interface LoadingProps {
  active: boolean;
}

const Loading = (props: LoadingProps) => {
  return (
    <Overlay active={props.active}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <div
          style={{
            paddingTop: "45vh",
            display: "inline-block",
            width: "200px",
          }}
        >
          <div className="tags has-addons">
            <span
              className="tag is-medium is-primary"
              style={{ padding: "5px" }}
            >
              {" "}
              <h1 className="title is-4">⚡</h1>{" "}
            </span>
            <span
              className="tag is-medium"
              style={{
                backgroundColor: "white",
                border: "solid 2px #fad052",
              }}
            >
              {" "}
              <h1 className="title is-4">David Olive</h1>
            </span>
          </div>

          <h3 className="title is-6">
            {" "}
            <Typical steps={["Loading Assets ..."]} loop={1} wrapper="p" />
          </h3>
          <div className="fa-3x">
            <i className="fas fa-spinner fa-spin"></i>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default Loading;
