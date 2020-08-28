import React from "react";
import "./App.css";
import Leaflet from "./components/Leaflet.jsx";
import Loading from "./components/Loading.jsx";
import Main from "./components/Main.jsx";
import Flock from "./components/Flock.jsx";
import Header from "./components/Header.jsx";
import * as api from "./api";
import { Router } from "@reach/router";

class App extends React.Component {
  state = {
    localhost: "http://localhost:3000",
    deploy: "https://dnd-campaign.netlify.app",
    testing: true,
    birdScripts: false,
    pageHeader: false,
  };

  componentDidMount = () => {
    if (window.location.pathname !== "/") {
      this.updatePageHeader();
    }
  };

  updatePageHeader = () => {
    this.setState((currentState) => {
      return { pageHeader: !currentState.pageHeader };
    });
  };

  updateBirdScripts = () => {
    this.setState({ birdScripts: true });
  };

  render() {
    const { testing, localhost, deploy, birdScripts, pageHeader } = this.state;
    let url = deploy;
    if (testing === true) {
      url = localhost;
    }
    return (
      <div className="App">
        {pageHeader === false ? null : (
          <Header
            updatePageHeader={this.updatePageHeader}
            pageHeader={pageHeader}
          />
        )}
        <Router>
          <Main
            path="/"
            url={url}
            updateBirdScripts={this.updateBirdScripts}
            birdScripts={birdScripts}
            updatePageHeader={this.updatePageHeader}
            pageHeader={pageHeader}
          />
          <Leaflet map="world-map" path="/world-map" url={url} />
          <Flock path="/flock" width={800} height={600} url={url} />
        </Router>
      </div>
    );
  }
}

export default App;
