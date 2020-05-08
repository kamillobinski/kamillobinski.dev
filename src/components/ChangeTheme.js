import React from "react";
import { ThemeDark, ThemeLight } from "./icons/ThemeIcons";
import "../utils/global.css";
import "../style/ChangeTheme.css";

class ChangeTheme extends React.Component {
  state = {
    checked: localStorage.getItem("theme") === "dark" ? true : false,
    theme: localStorage.getItem("theme"),
    isDarkThemeEnabled: false,
  };

  componentDidMount() {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
    if (this.state.checked === true) {
      this.setState({ isDarkThemeEnabled: true });
    } else if (this.state.checked === false) {
      this.setState({ isDarkThemeEnabled: false });
    }
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
      this.setState({ isDarkThemeEnabled: true });
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      this.setState({
        checked: false,
      });
      this.setState({ isDarkThemeEnabled: false });
    }
  };

  render() {
    return (
      <div className="switch-outer">
        <span
          className="switch-outer-icon-light"
          style={{
            fill: this.state.isDarkThemeEnabled ? "#7a7c80" : "#932eff",
          }}
        >
          <ThemeLight width="13px" height="13px" />
        </span>
        <label className="switch">
          <input
            type="checkbox"
            defaultChecked={this.state.checked}
            onChange={() => this.toggleThemeChange()}
          />
          <span className="slider round" />
        </label>
        <span
          className="switch-outer-icon-dark"
          style={{
            fill: this.state.isDarkThemeEnabled ? "#932eff" : "#7a7c80",
          }}
        >
          <ThemeDark width="13px" height="13px" />
        </span>
      </div>
    );
  }
}

export default ChangeTheme;
