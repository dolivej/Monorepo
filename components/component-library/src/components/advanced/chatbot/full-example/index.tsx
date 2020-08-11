import React from "react";

import { Icon, IconProps } from "../Icon/index";
import { Popup, PopupProps } from "../Popup/index";

export interface FullProps {}

class Full extends React.Component<
  {
    messageList: Array<String>;
    popupRound: string;
    iconRound: string;
  },
  { hidden: boolean; messageList: Array<String>; message: string; icon: string }
> {
  constructor(
    props: Readonly<{
      messageList: String[];
      color: string;
      popupRound: string;
      iconRound: string;
    }>
  ) {
    super(props);

    this.state = {
      hidden: true,
      messageList: this.props.messageList,
      message: "",
      icon: "fas fa-comment-alt fa-lg",
    };
  }

  onclick = () => {
    let iconType = "";
    if (!this.state.hidden) {
      iconType = "fas fa-comment-alt fa-lg";
    } else {
      iconType = "fas fa-times fa-2x";
    }
    this.setState({
      hidden: !this.state.hidden,
      icon: iconType,
    });
  };

  displayType = (hidden: boolean) => {
    if (hidden) {
      return "none";
    } else {
      return "block";
    }
  };

  onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let holder = this.state.messageList;
    holder.push("R:" + this.state.message);
    this.setState({
      messageList: holder,
      message: "",
    });
  };

  handleChange = (e: { target: { value: any } }) => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          paddingBottom: "16px",
          paddingRight: "16px",
          bottom: "0",
          right: "0",
          minHeight: "500 px",
        }}
      >
        <Popup
          display={this.displayType(this.state.hidden)}
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          messageList={this.props.messageList}
          value={this.state.message}
          roundAmount={this.props.popupRound}
        />
        <Icon
          onClick={this.onclick}
          icon={this.state.icon}
          roundAmount={this.props.iconRound}
        />
      </div>
    );
  }
}

export default Full;
