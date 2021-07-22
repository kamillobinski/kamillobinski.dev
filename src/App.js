import React from "react";
import Intro from './components/intro/Intro';
import { ParallaxProvider } from 'react-scroll-parallax';
import './assets/fonts/fonts.css';

class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="app">
          <Intro />
        </div>
      </ParallaxProvider>
    )
  }
}

export default App;
