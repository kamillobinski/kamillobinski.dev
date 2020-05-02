import React from "react";
import "../style/ContentPlaceholder.css";

class ContentPlaceholder extends React.Component {
  createPlaceholders = () => {
    let placeholders = [];
    for (let i = 0; i < this.props.quantity; i++) {
      const randomPlaceholderWidth = this.generateRandomPlaceholderWidth();
      placeholders.push(
        <div
          className="content-placeholder-text"
          key={i}
          style={{ width: randomPlaceholderWidth + "%" }}
        >
          <span className="content-placeholder-gradient"></span>
        </div>
      );
    }
    return placeholders;
  };

  generateRandomPlaceholderWidth() {
    const min = 65;
    const max = 92;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="content-placeholder">
        {this.createPlaceholders(this.props.quantity)}
      </div>
    );
  }
}

export default ContentPlaceholder;
