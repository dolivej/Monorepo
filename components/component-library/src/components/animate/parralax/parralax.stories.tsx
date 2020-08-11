import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Parralax } from "./index";

storiesOf("Animation/Parralax", module)
  .addDecorator(withKnobs)
  .add("example", () => <Parralax props={{}} />);
