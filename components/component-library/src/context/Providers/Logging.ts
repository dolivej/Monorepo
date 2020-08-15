import {
  ApplicationInsights,
  SeverityLevel,
} from "@microsoft/applicationinsights-web";
import {
  ReactPlugin,
  withAITracking,
} from "@microsoft/applicationinsights-react-js";

let reactPlugin: any;
let appInsights: any;

const createAppInsights = () => {
  const initialize = (instrumentationKey: any, browserHistory: any) => {
    if (!browserHistory) {
      throw new Error("Could not initialize Telemetry Service");
    }
    if (!instrumentationKey) {
      throw new Error(
        "Instrumentation key not provided in ./src/telemetry-provider.jsx"
      );
    }

    reactPlugin = new ReactPlugin();

    appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: instrumentationKey,
        maxBatchInterval: 0,
        disableFetchTracking: false,
        extensions: [reactPlugin],
        extensionConfig: {
          [reactPlugin.identifier]: {
            history: browserHistory,
          },
        },
      },
    });

    appInsights.loadAppInsights();
  };

  return { reactPlugin, appInsights, initialize };
};

export const getLoggerService = () => appInsights;
export const createLoggerService = createAppInsights();
export const loggingEnabled = withAITracking;

export const logger = {
  initialized: false,
  loggerService: null,
  severity: SeverityLevel,
};
