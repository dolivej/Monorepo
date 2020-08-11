import React from "react";

import Avatar from "../Avatar/index";
import Bubbles from "../ChatBubbles/index";

export interface PopupProps {
  display: string;
  onSubmit: (e: any) => void;
  handleChange: (e: any) => void;
  messageList: Array<String>;
  value: string;
  roundAmount: string;
}

export const Popup = (props: PopupProps) => {
  let avatarProps = {
    size: "32px",
    statusSize: "11px",
    avatarRoundAmount: "25%",
    statusRoundAmount: "50%",
    statusColor: "rgb(0, 189, 165)",
    avatarBorderSize: "2px",
    statusBorderSize: "2px",
    image:
      "url(https://petmd.com/sites/default/files/CANS_dogsmiling_379727605.jpg)",
    statusIsHidden: false,
  };

  let display = {
    display: props.display,
  };

  let width = {
    width: "320px",
  };

  let header = {
    borderRadius: props.roundAmount,
  };

  return (
    <div className="popup-chat-widget-container" style={display}>
      <div className="popup-header-container popup" style={header}>
        <div className="popup-subheader-container">
          <div className="popup-subheader-content">
            <Avatar
              size={avatarProps.size}
              statusSize={avatarProps.statusSize}
              avatarRoundAmount={avatarProps.avatarRoundAmount}
              statusRoundAmount={avatarProps.statusRoundAmount}
              statusColor={avatarProps.statusColor}
              avatarBorderSize={avatarProps.avatarBorderSize}
              statusBorderSize={avatarProps.statusBorderSize}
              image={avatarProps.image}
              statusIsHidden={avatarProps.statusIsHidden}
            />
            <div className="popup-subheader-text">
              <h4 className="popup-text">Max</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="popup-message-container customScrollBar">
          <Bubbles messageList={props.messageList} />
        </div>
        <div className="popup-sender-container popup">
          <form
            className="popup-sender"
            onSubmit={props.onSubmit}
            onChange={props.handleChange}
          >
            <input
              className="input "
              placeholder="Enter Question"
              type="text"
              style={width}
              value={props.value}
            ></input>
            <button className="button send-button is-info">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
