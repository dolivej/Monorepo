import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Avatar from "./index";

let avatarProps = {
  size: "128px",
  statusSize: "33px",
  avatarRoundAmount: "25%",
  statusRoundAmount: "50%",
  statusColor: "rgb(0, 189, 165)",
  avatarBorderSize: "2px",
  statusBorderSize: "2px",
  image:
    "url(https://petmd.com/sites/default/files/CANS_dogsmiling_379727605.jpg)",
  statusIsHidden: false,
};

storiesOf("Advanced/Chatbot/Avatar", module)
  .addDecorator(withKnobs)
  .add("example", () => (
    <div>
      <Avatar
        size={text("avatarSize", avatarProps.size)}
        statusSize={text("statusSize", avatarProps.statusSize)}
        avatarRoundAmount={text(
          "avatarRoundAmount",
          avatarProps.avatarRoundAmount
        )}
        statusRoundAmount={text(
          "statusRoundAmount",
          avatarProps.statusRoundAmount
        )}
        statusColor={text("statusColor", avatarProps.statusColor)}
        avatarBorderSize={text(
          "avatarBorderSize",
          avatarProps.avatarBorderSize
        )}
        statusBorderSize={text(
          "statusBorderSize",
          avatarProps.statusBorderSize
        )}
        image={avatarProps.image}
        statusIsHidden={boolean("statusVisibility", avatarProps.statusIsHidden)}
      />
    </div>
  ));
