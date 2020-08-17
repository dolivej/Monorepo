import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import { contactProps, Contact } from "./index";

storiesOf("Advanced/Form/ContactMe", module)
  .addDecorator(withKnobs)
  .add("example", () => (
    <div style={{ width: "800px" }}>
      <Contact
        contactData={{
          title: "I am always open to a new oppertunity!",
          subtitle:
            "Feel free to reach out if you are interested in my skills, projects or just want to talk.",
          options: [
            () => {
              return <div>hello</div>;
            },
            () => {
              return <div>hello</div>;
            },
            () => {
              return <div>hello</div>;
            },
          ],
          onSubmit: (data: any) => {
            console.log(data);
          },
        }}
      />
    </div>
  ));
