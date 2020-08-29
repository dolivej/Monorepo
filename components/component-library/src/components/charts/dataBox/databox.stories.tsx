import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { DataBox } from "./index";

const Example = () => {
  return (
    <div>
      <DataBox
        title="Income"
        timeFrame="monthly"
        isNegative={false}
        value="$180,000"
        subtitle="Total Income"
        showArrow={true}
        subValue="14%"
      />
    </div>
  );
};

storiesOf("Charts/Data Box", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
