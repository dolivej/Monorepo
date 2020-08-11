import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { LogoShowcase } from "./index";

const Example = () => {
  return (
    <div>
      <LogoShowcase
        images={[
          "https://cdn.iconscout.com/icon/free/png-256/ibm-3-569470.png",
          "https://mma.prnewswire.com/media/944656/Locnest_Is_Toronto_the_next_Switzerland____Locnest_says_Yes___an.jpg?p=twitter",
          "https://www.imaginecommunications.com/sites/default/files/media-images/imagine_running_man.png",
          "https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg",
        ]}
        links={[
          "https://www.ibm.com/cloud",
          "https://locnest.com/",
          "https://www.imaginecommunications.com/",
          "https://uwaterloo.ca/",
        ]}
        title="Places I've Worked At:"
      />
    </div>
  );
};

storiesOf("Content/Logo Showcase", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
