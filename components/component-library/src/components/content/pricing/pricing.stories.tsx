import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Pricing } from "./index";

const Example = () => {
  return (
    <div>
      <Pricing
        title="Our Plans"
        plans={[
          {
            title: "Small Piper",
            description:
              "Join our network, but build and manage everything yourself.",
            price: "",
            callToAction: "Contact Sales",
            callToActionLink: "www",
            callToActionFunction: () => {},
            groups: [
              {
                title: "Frameworks",
                columns: "3",
                items: [
                  {
                    text: "React",
                  },
                  { text: "Gatsby" },
                  { text: "Storybook" },
                ],
              },
            ],
          },
          {
            title: "Small Piper",
            description:
              "Join our network, but build and manage everything yourself.",
            price: "",
            callToAction: "Contact Sales",
            callToActionLink: "www",
            callToActionFunction: () => {},
            groups: [
              {
                title: "Frameworks",
                columns: "3",
                items: [{ text: "React" }, { text: "Gatsby" }],
              },
            ],
          },
          {
            title: "Small Piper",
            description:
              "Join our network, but build and manage everything yourself.",
            price: "",
            callToAction: "Contact Sales",
            callToActionLink: "www",
            callToActionFunction: () => {},
            groups: [
              {
                title: "Frameworks",
                columns: "3",
                items: [{ text: "React" }, { text: "Gatsby" }],
              },
            ],
          },
        ]}
      />
    </div>
  );
};

storiesOf("Content/Pricing", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
