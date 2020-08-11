import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { AnimateClick } from "./index";

storiesOf("Animation/Click", module)
  .addDecorator(withKnobs)
  .add("example", () => <AnimateClick props={{}} />);
