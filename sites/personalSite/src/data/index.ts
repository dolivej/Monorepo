import analytics from "./pictures/analytics.svg";
import backend from "./pictures/backend.svg";
import frontend from "./pictures/frontend.svg";

export const mySkills = {
  title: "My Skillset",
  plans: [
    {
      img: frontend,
      title: "Front End (React/Gatsby)",
      description:
        "I excell at developing reusable, functional and beautiful components/sites.",
      price: "",
      callToAction: "See Examples",
      callToActionLink: "#projects",
      groups: [
        {
          title: "Frameworks",
          columns: "3",
          items: [
            {
              text: "React",
            },
            { text: "Gatsby" },
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
          title: "Frameworks",
          columns: "3",
          items: [{ text: "Express" }],
        },
      ],
    },
    {
      img: analytics,
      title: "Analytics (Azure)",
      description:
        "I am passionate about all things analytics and also topics like SEO.",
      price: "",
      callToAction: "See Examples",
      callToActionLink: "#analytics",
      groups: [
        {
          title: "Frameworks",
          columns: "3",
          items: [{ text: "AppInsights" }],
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
