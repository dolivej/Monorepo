import React, { createContext, Component } from "react";
import {
  logger,
  createLoggerService,
  getLoggerService,
  loggingEnabled,
} from "./Providers/Logging";

export type ContextProps = {
  loggerProps: any;
};

export type ContextState = {
  logger: any;
};

export const Context = createContext<ContextState>({
  logger: { ...logger },
});

export class ContextProviderBase extends Component<ContextProps, ContextState> {
  constructor(props: ContextProps) {
    super(props);

    // Set default state
    this.state = {
      logger: { ...logger },
    };
  }

  componentDidMount() {
    const history = this.props.loggerProps.history;
    const initialized = this.state.logger.initialized;
    const AppInsightsInstrumentationKey = this.props.loggerProps
      .instrumentationKey;

    if (
      !Boolean(initialized) &&
      Boolean(AppInsightsInstrumentationKey) &&
      Boolean(history)
    ) {
      createLoggerService.initialize(AppInsightsInstrumentationKey, history);
      this.setState({
        logger: {
          ...this.state.logger,
          initialized: true,
          loggerService: getLoggerService(),
        },
      });
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const ContextProvider = loggingEnabled(
  createLoggerService.reactPlugin,
  ContextProviderBase
);
