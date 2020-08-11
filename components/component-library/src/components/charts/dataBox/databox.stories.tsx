import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { DataBox } from "./index";

const Example = () => {
  return (
    <div>
      <DataBox />
    </div>
  );
};

storiesOf("Charts/Data Box", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
