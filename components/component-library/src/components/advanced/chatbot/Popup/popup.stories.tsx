import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { Popup, PopupProps } from "./index";

let message = "";

let messageList = [
  "L: Left message 1, but now I am making it a bit longer yea",
  "L:Left message 2",
  "R:Right Message 1",
  "R:Right Message 2, But I am making it quite a bit loooooooooonger",
  "L:LEFT MESSAGE 3",
  "L:LEFT MESSAGE 3",
  "L:LEFT MESSAGE 3",
  "L:LEFT MESSAGE 3",
  "L:LEFT MESSAGE 3",
  "R:Stop!",
  "L:Ok!",
];

let props = {
  roundAmount: "4px 4px 0px 0px",
  color: "#f58c1e",
};

storiesOf("Advanced/Chatbot/Popup", module)
  .addDecorator(withKnobs)
  .add("example", () => (
    <>
      <Popup
        display="block"
        onSubmit={(e) => {
          e.preventDefault();
          messageList.push(message);
          console.log(messageList);
        }}
        handleChange={(e) => {
          message = e.target.value;
          console.log(message);
        }}
        messageList={messageList}
        value=""
        roundAmount={text("roundAmount", props.roundAmount)}
      />
    </>
  ));
