import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import { Contact } from "../forms/index";
import { overlayProps, Overlay } from "./index";

storiesOf("Advanced/Overlay", module)
  .addDecorator(withKnobs)
  .add("example", () => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Overlay active={boolean("active", true)}>
        <div
          className="customScrollBar"
          style={{
            maxWidth: "800px",
            maxHeight: "510px",
            overflow: "scroll",
          }}
        >
          <h2 className="title is-2">Contact Me.</h2>
          <Contact
            contactData={{
              title: "I am always open to a new oppertunity!",
              subtitle:
                "Feel free to reach out if you are interested in my skills, projects or just want to talk.",
              options: [
                () => {
                  return <div>hello</div>;
                },
                () => {
                  return <div>hello</div>;
                },
                () => {
                  return <div>hello</div>;
                },
              ],
              onSubmit: (data: any) => {
                console.log(data);
              },
            }}
          />
        </div>
      </Overlay>
      Background Text
      <button className="button">Background Button</button>
    </div>
  ));
