import React from "react";
import { Info } from "./icons/MessageIcons";
import "../style/Message.css";
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingText: "",
    };
  }

  animateDots() {
    setInterval(() => {
      var text = this.state.loadingText;
      this.setState({ loadingText: (text += ".") });
      if (text.length > 3) {
        this.setState({ loadingText: "" });
      }
    }, 1000);
  }

  componentDidMount() {
    this.animateDots();
  }

  render() {
    return (
      <div className="message">
        <div className="message-content">
          <Info width="20" height="20" />
          <span className="message-text">{this.props.text}</span>
          <span className="message-dots">{this.state.loadingText}</span>
        </div>
      </div>
    );
  }
}

export default Message;
