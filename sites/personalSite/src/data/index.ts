import analytics from "./pictures/analytics.svg";
import backend from "./pictures/backend.svg";
import frontend from "./pictures/frontend.svg";

export const mySkills = {
  title: "Technical Skills",
  maxWidths: "100%",
  minWidths: "33%",
  plans: [
    {
      img: frontend,
      title: "Front End",
      description:
        "I excel at developing reusable, functional and beautiful components/sites.",
      price: "",
      callToAction: "See Examples",
      callToActionLink: "#projects",
      groups: [
        {
          title: "Languages",
          columns: "2",
          items: [
            {
              text: "JavaScript",
            },
            { text: "TypeScript" },
            { text: "HTML/CSS" },
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
      img: backend,
      title: "Back End",
      description:
        "I have experience developing asyncronous API's with Express.",
      price: "",
      callToAction: "See Examples",
      callToActionLink: "#projects",
      groups: [
        {
          title: "Languages",
          columns: "2",
          items: [
            { text: "Node.js" },
            { text: "SQL" },
            { text: "C++" },
            { text: "Python" },
          ],
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
            { text: "MongoDB" },
            { text: "Redis" },
          ],
        },
      ],
    },
    {
      img: analytics,
      title: "Analytics",
      description:
        "I am passionate about all things analytics and also topics like SEO.",
      price: "",
      callToAction: "See Examples",
      callToActionLink: "#analytics",
      groups: [
        {
          title: "Languages",
          columns: "2",
          items: [{ text: "SQL" }],
        },
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
      ],
    },
  ],
};

export const myLogos = {
  images: [
    "https://cdn.iconscout.com/icon/free/png-256/ibm-3-569470.png",
    "https://i.ibb.co/VV3jkcx/Capture213123.png",
    "data:image/png;base64,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",
    "https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg",
  ],
  links: [
    "https://www.ibm.com/cloud",
    "https://locnest.com/",
    "https://www.imaginecommunications.com/",
    "https://uwaterloo.ca/",
  ],
  title: "Companies I've Developed For",
};
