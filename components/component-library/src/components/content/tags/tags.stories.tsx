import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Tag } from "./index";

const Example = () => {
  return (
    <div>
      <Tag
        tagName={text("tagName", "React")}
        tagLink={text(
          "tagLink",
          "https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element"
        )}
        icon={text(
          "icon",
          "https://www.pngfind.com/pngs/m/122-1222517_react-hexagon-react-png-transparent-png.png"
        )}
        size={number("size", 3)}
        tagColor={text("tagColor", "black")}
        textColor={text("textColor", "white")}
      />
    </div>
  );
};

storiesOf("Content/Tag", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
