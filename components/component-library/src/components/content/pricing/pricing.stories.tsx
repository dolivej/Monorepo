import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Pricing } from "./index";

let data = {
  title: "Technical Skills",
  maxWidths: "400px",
  minWidths: "33%",
  plans: [
    {
      img: "",
      title: "Front End (React/Gatsby)",
      description:
        "I excell at developing reusable, functional and beautiful components/sites.",
      price: "",
      callToAction: "See Examples",
      callToActionLink: "#projects",
      groups: [
        {
          title: "Languages",
          columns: "2",
          items: [
            {
              text: "Javascript",
            },
            { text: "Typescript" },
            { text: "HTML" },
            { text: "CSS" },
          ],
        },
        {
          title: "Frameworks",
          columns: "2",
          items: [
            {
              text: "React.js",
            },
            { text: "Gatsby.js" },
            { text: "Storybook.js" },
          ],
        },
        {
          title: "Techniques",
          columns: "2",
          items: [
            {
              text: "Atomic Design",
            },
            { text: "Monorepos" },
            { text: "Multi-Language" },
            { text: "Reusable Design" },
            { text: "Component Library Design" },
          ],
        },
      ],
    },
    {
      img: "",
      title: "Back End (Node.js)",
      description:
        "I have experience developing asyncronous API's with Express.",
      price: "",
      callToAction: "See Examples",
      callToActionLink: "#projects",
      groups: [
        {
          title: "Languages",
          columns: "2",
          items: [{ text: "Node.js" }],
        },
        {
          title: "Frameworks",
          columns: "2",
          items: [{ text: "Express.js" }],
        },
        {
          title: "Tools/Services",
          columns: "2",
          items: [
            { text: "Postman" },
            { text: "SendGrid" },
            { text: "IBM Functions" },
            { text: "Azure Functions" },
            { text: "REST Api's" },
            { text: "SQL/MongoDB" },
            { text: "Microservice Design" },
            { text: "Middlewear" },
          ],
        },
      ],
    },
    {
      img: "",
      title: "Analytics (Azure)",
      description:
        "I am passionate about all things analytics and also topics like SEO.",
      price: "",
      callToAction: "See Examples",
      callToActionLink: "#analytics",
      groups: [
        {
          title: "Analytics Services",
          columns: "2",
          items: [
            { text: "Amplitude" },
            { text: "Segment" },
            { text: "App Insights" },
            { text: "New Relic" },
          ],
        },
        {
          title: "SEO",
          columns: "2",
          items: [{ text: "Multi-Language" }, { text: "Backlinks" }],
        },
      ],
    },
  ],
};

const Example = () => {
  return (
    <div>
      <Pricing {...data} />
    </div>
  );
};

storiesOf("Content/Pricing", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
