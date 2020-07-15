import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { AnimateHover } from "./index";

storiesOf("Animate/Hover", module)
  .addDecorator(withKnobs)
  .add("example", () => <AnimateHover props={{}} />);
