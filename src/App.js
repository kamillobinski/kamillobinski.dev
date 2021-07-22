import React from "react";
import Intro from './components/intro/Intro';
import About from './components/about/About';
import { ParallaxProvider } from 'react-scroll-parallax';
import './assets/fonts/fonts.css';

class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <Intro />
        <About />
      </ParallaxProvider>
    )
  }
}

export default App;
