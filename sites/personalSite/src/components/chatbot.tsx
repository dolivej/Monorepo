import React from "react";
import Axios from "axios";

import { Icon, Popup } from "@locnest/component-library";

export interface ChatbotProps {}

class Chatbot extends React.Component<
  {
    messageList: Array<String>;
    popupRound: string;
    iconRound: string;
  },
  {
    hidden: boolean;
    messageList: Array<String>;
    message: string;
    icon: string;
    sessionId: string;
  }
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
      sessionId: "",
    };
  }

  componentDidMount = () => {
    Axios.get(
      "https://dolivejchatbotapi.us-south.cf.appdomain.cloud/api/session"
    )
      .then((response) => {
        //console.log(response);
        this.setState({ sessionId: response.data.result.session_id });
        Axios.post(
          "https://dolivejchatbotapi.us-south.cf.appdomain.cloud/api/message",
          {
            session_id: this.state.sessionId,
          }
        )
          .then((response) => {
            //console.log(response);
            var messagesHolder = this.state.messageList;
            messagesHolder.push(
              "L:" + response.data.result.output.generic[0].text
            );
            this.setState({ messageList: messagesHolder });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addMessage = (message: any) => {
    let messagesHolder = this.state.messageList;
    messagesHolder.push("R:" + message);
    //console.log(messagesHolder);
    this.setState({ messageList: messagesHolder, message: "" });
    Axios.post(
      "https://dolivejchatbotapi.us-south.cf.appdomain.cloud/api/message",
      {
        session_id: this.state.sessionId,
        input: {
          text: message,
        },
      }
    )
      .then((response) => {
        //console.log(response);
        var messagesHolder = this.state.messageList;
        messagesHolder.push("L:" + response.data.result.output.generic[0].text);
        this.setState({ messageList: messagesHolder });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    this.addMessage(this.state.message);
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
          messageList={this.state.messageList}
          value={this.state.message}
          roundAmount={this.props.popupRound}
          avatarProps={{
            size: "32px",
            statusSize: "11px",
            avatarRoundAmount: "25%",
            statusRoundAmount: "50%",
            statusColor: "rgb(0, 189, 165)",
            avatarBorderSize: "2px",
            statusBorderSize: "2px",
            image:
              "url(data:image/png;base64,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)",
            statusIsHidden: false,
          }}
          name={"David-Bot"}
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

export default Chatbot;
