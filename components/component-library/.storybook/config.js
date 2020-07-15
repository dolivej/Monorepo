import React from "react";
import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { View } from "../src/components/layout/View";
import "!style-loader!css-loader!sass-loader!./sass-loader.sass";

const req = require.context("../src", true, /\.stories\.(ts|tsx)$/);
configure(() => {
  req.keys().forEach((filename) => req(filename));
}, module);

addDecorator((storyFn) => <View>{storyFn()}</View>);
