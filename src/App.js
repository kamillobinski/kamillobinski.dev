import React from "react";
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ScrollMini from './components/scroll/ScrollMini';
import { ParallaxProvider } from 'react-scroll-parallax';
import './assets/fonts/fonts.css';
import './app.css';
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Social from "./components/social/Social";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollPos: "", scrollLimit: "" };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateScrollPos);
    window.addEventListener('scroll', this.updateScrollLimit);
    window.addEventListener('resize', this.updateScrollPos);
    window.addEventListener('resize', this.updateScrollLimit);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', null);
    window.removeEventListener('scroll', null);
  }

  updateScrollPos = () => {
    this.setState({
      scrollPos: window.pageYOffset,
    })
  }

  updateScrollLimit = () => {
    var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
      document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    this.setState({ scrollLimit: limit - window.innerHeight });
  }

  render() {
    return (
      <ParallaxProvider>
        <div className="app">
          <Intro />
          <About />
          <Projects scrollPos={this.state.scrollPos} scrollLimit={this.state.scrollLimit} />
          <Skills />
          <Social />
          <ScrollMini scrollPos={this.state.scrollPos} scrollLimit={this.state.scrollLimit} />
        </div>
      </ParallaxProvider>
    )
  }
}

export default App;
