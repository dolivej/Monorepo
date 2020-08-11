import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Full from "./index";

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

storiesOf("Advanced/Chatbot/full-example", module)
  .addDecorator(withKnobs)
  .add("example", () => (
    <div style={{ marginTop: "600px" }}>
      <Full
        messageList={messageList}
        popupRound={text("popupRound", "4px 4px 0px 0px")}
        iconRound={text("iconRound", "25%")}
      />
    </div>
  ));
