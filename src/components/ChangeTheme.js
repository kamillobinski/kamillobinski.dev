import React from "react";
import "../utils/global.css";
import "../style/ChangeTheme.css";

class ChangeTheme extends React.Component {
  state = {
    checked: localStorage.getItem("theme") === "dark" ? true : false,
    theme: localStorage.getItem("theme"),
  };

  componentDidMount() {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }

  toggleThemeChange = () => {
    const { checked } = this.state;
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      this.setState({
        checked: true,
      });
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      this.setState({
        checked: false,
      });
    }
  };

  render() {
    return (
      <div className="switch-outer">
        <span>Dark mode </span>
        <label className="switch">
          <input
            type="checkbox"
            defaultChecked={this.state.checked}
            onChange={() => this.toggleThemeChange()}
          />
          <span className="slider round" />
        </label>
      </div>
    );
  }
}

export default ChangeTheme;
