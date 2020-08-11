import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { ContextProvider, Context } from "./index";
import { globalHistory } from "@reach/router";

const Example = () => {
  const [logger, setLogger] = useState(null);

  const loggerProps = {
    instrumentationKey: "058335e5-1838-4575-94a9-390182b9668b",
    history: globalHistory,
  };

  function throwError() {
    let foo = {
      field: { bar: "value" },
    };

    // This will crash the app; the error will show up in the Azure Portal
    return foo.field.bar;
  }

  function ajaxRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://httpbin.org/status/200");
    xhr.send();
  }

  function fetchRequest() {
    fetch("https://httpbin.org/status/200");
  }
  return (
    <ContextProvider loggerProps={loggerProps}>
      <Context.Consumer>
        {({ logger }: any) => {
          return (
            <div>
              <button
                onClick={logger.methods.trackException(
                  logger.loggerService,
                  "exception test"
                )}
              >
                Track Exception
              </button>
              <button
                onClick={logger.methods.trackEvent(
                  logger.loggerService,
                  "event test"
                )}
              >
                Track Event
              </button>
              <button
                onClick={logger.methods.trackTrace(
                  logger.loggerService,
                  "trace test"
                )}
              >
                Track Trace
              </button>
              <button onClick={throwError}>Autocollect an Error</button>
              <button onClick={ajaxRequest}>
                Autocollect a Dependency (XMLHttpRequest)
              </button>
              <button onClick={fetchRequest}>
                Autocollect a dependency (Fetch)
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
