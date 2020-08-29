import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { FAQ } from "./index";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

storiesOf("Content/FAQ", module)
  .addDecorator(withKnobs)
  .addParameters({
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
  })
  .add("example", () => (
    <FAQ
      picture="https://i.redd.it/3k7uvh8rz5k41.jpg"
      title="What are Site Health Analytics ?"
    >
      <div>Inner Child</div>
    </FAQ>
  ));
