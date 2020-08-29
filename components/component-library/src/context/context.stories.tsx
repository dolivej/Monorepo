import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { ContextProvider, Context } from "./index";
import { globalHistory } from "@reach/router";

const Example = () => {
  const loggerProps = {
    instrumentationKey: process.env.STORYBOOK_APPINSIGHTS_KEY,
    history: globalHistory,
  };

  return (
    <ContextProvider loggerProps={loggerProps}>
      <Context.Consumer>
        {({ logger }: any) => {
          return (
            <div>
              <button
                onClick={() => {
                  logger.loggerService.trackEvent({
                    name: "Clicked Button",
                    properties: { buttonName: "test button", group: "test" },
                  });
                }}
              >
                Test Button
              </button>

              <button
                onClick={() => {
                  logger.loggerService.trackEvent({
                    name: "SearchString",
                    properties: { query: "test query", group: "test" },
                  });
                }}
              >
                Search Param
              </button>
            </div>
          );
        }}
      </Context.Consumer>
    </ContextProvider>
  );
};

storiesOf("Context", module)
  .addDecorator(withKnobs)
  .add("example", () => <Example />);
