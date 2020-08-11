import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { FAQ } from "./index";

const Example = () => {
  return (
    <div>
      <FAQ />
    </div>
  );
};

storiesOf("Content/FAQ", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
