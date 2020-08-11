import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { BarChart } from "./index";

storiesOf("Charts/Bar", module)
  .addDecorator(withKnobs)
  .add("example", () => <BarChart props={{}} />);
