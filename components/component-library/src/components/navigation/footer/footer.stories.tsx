import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Footer } from "./index";

const Example = () => {
  return (
    <div>
      <Footer />
    </div>
  );
};

storiesOf("Navigation/Footer", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
