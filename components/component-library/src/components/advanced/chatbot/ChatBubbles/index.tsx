import React, { useState, useEffect } from "react";
import Avatar from "../Avatar/index";

export interface BubbleProps {
  messageList: Array<String>;
}

let avatarProps = {
  size: "27px",
  statusSize: "11px",
  avatarRoundAmount: "25%",
  statusRoundAmount: "50%",
  statusColor: "rgb(0, 189, 165)",
  avatarBorderSize: "2px",
  statusBorderSize: "2px",
  image:
    "url(https://petmd.com/sites/default/files/CANS_dogsmiling_379727605.jpg)",
  statusIsHidden: true,
};

export const chatBubbles = (props: BubbleProps) => {
  let style = {
    marginTop: "10px",
  };

  const [messages, setMessages] = useState(props.messageList);

  try {
    const scrollTo = document.getElementById("scrollTo");
    useEffect(() => {
      scrollTo?.scrollIntoView();
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <div style={style}>
      {messages.map((item, i) => {
        let message = item.split(":");
        if (message[0] === "L") {
          return (
            <div className="bubbles-message-container-left-full">
              {(i === 0 || props.messageList[i - 1].split(":")[0] !== "L") && (
                <div className="bubbles-message-title">
                  <div className="bubbles-avatar-container">
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
                  </div>
                  <div className="bubbles-name-container chatBubblesText">
                    {" "}
                    Max{" "}
                  </div>
                </div>
              )}
              <div className="bubbles-message-container-left">
                <div className="bubbles-text-container-left">{message[1]}</div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="bubbles-message-container-right-outer">
              <div className="bubbles-message-container-right chatBubbles">
                <div className="bubbles-text-container-right">{message[1]}</div>
              </div>
            </div>
          );
        }
      })}
      <div id="scrollTo"></div>
    </div>
  );
};

export default chatBubbles;
