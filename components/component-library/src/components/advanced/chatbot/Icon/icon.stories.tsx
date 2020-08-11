import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { Icon, IconProps } from "./index";

storiesOf("Advanced/Chatbot/Icon", module)
  .addDecorator(withKnobs)
  .add("example", () => (
    <div style={{ marginTop: "550px" }}>
      <Icon
        onClick={() => null}
        icon="fas fa-comment-alt fa-lg"
        roundAmount={text("roundAmount", "25%")}
      />
    </div>
  ));
