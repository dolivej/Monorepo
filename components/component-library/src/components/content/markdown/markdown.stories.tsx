import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Markdown } from "./index";

const Example = () => {
  const markdown = `
  ![Fullstack React](https://dzxbosgk90qga.cloudfront.net/fit-in/504x658/n/20190131015240478_fullstack-react-cover-medium%402x.png)
  `;
  return (
    <div>
      <Markdown markdownString={markdown} />
    </div>
  );
};

storiesOf("Content/Markdown", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
