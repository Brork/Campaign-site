import React from "react";
import "./App.css";
import Leaflet from "./components/Leaflet.jsx";
import Loading from "./components/Loading.jsx";
import Main from "./components/Main.jsx";
import Flock from "./components/Flock.jsx";
import * as api from "./api";
import { Router } from "@reach/router";

class App extends React.Component {
  state = {
    localhost: "http://localhost:3000",
    deploy: "https://dnd-campaign.netlify.app",
    testing: true,
  };

  componentDidMount = () => {};

  render() {
    const { testing, localhost, deploy } = this.state;
    let url = deploy;
    if (testing === true) {
      url = localhost;
    }
    return (
      <div className="App">
        <Router>
          <Main path="/" url={url} />
          <Leaflet map="world-map" path="/world-map" url={url} />
          <Flock path="/flock" width={800} height={600} url={url} />
        </Router>
      </div>
    );
  }
}

export default App;
