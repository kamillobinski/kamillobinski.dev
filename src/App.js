import React from "react";
import './assets/fonts/fonts.css';
import './app.css';
import Maintenance from "./components/maintenance/Maintenance";

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Maintenance/>
            </div>
        )
    }
}

export default App;
