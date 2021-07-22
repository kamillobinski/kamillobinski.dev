import React from "react";
import Intro from './components/intro/Intro';
import About from './components/about/About';
import { ParallaxProvider } from 'react-scroll-parallax';
import './assets/fonts/fonts.css';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="app">
          <Intro />
          <About />
        </div>
      </ParallaxProvider>
    )
  }
}

export default App;
