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
      title: "Front End (React/Gatsby)",
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
      img: backend,
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
            { text: "Middlewear" },
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

export const myLogos = {
  images: [
    "https://cdn.iconscout.com/icon/free/png-256/ibm-3-569470.png",
    "https://mma.prnewswire.com/media/944656/Locnest_Is_Toronto_the_next_Switzerland____Locnest_says_Yes___an.jpg?p=twitter",
    "https://www.imaginecommunications.com/sites/default/files/media-images/imagine_running_man.png",
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
