import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Bubbles from "./index";

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

storiesOf("Advanced/Chatbot/ChatBubbles", module)
  .addDecorator(withKnobs)
  .add("example", () => (
    <div>
      <Bubbles messageList={messageList} />
    </div>
  ));
