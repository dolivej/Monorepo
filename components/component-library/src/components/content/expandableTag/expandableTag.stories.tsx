import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { ExpandableTag } from "./index";

const Example = () => {
  return (
    <div>
      <ExpandableTag
        picture="fa-camera"
        title="What are Site Health Analytics ?"
        backgroundColor="orange"
      >
        hello
      </ExpandableTag>
    </div>
  );
};

storiesOf("Content/ExpandableTag", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
