import React from "react";
import "./App.css";
import Leaflet from "./components/Leaflet.jsx";
// import Map from "./components/Map.jsx";
import Marker from "./components/Marker.jsx";
import Input from "./components/Input.jsx";
import Loading from "./components/Loading.jsx";
import * as api from "./api";

class App extends React.Component {
  state = {
    markers: [],
    inputRequired: false,
    newMarker: { x: 0, y: 0, body: "" },
  };

  componentDidMount = () => {
    api.fetchMarkers().then(({ data }) => {
      this.setState({ markers: data.markers });
    });
  };

  updateMarkers = (body) => {
    api.postMarker(body).then(({ data }) => {
      this.setState(function (currentState) {
        currentState.markers.push(data.marker);

        return {
          markers: currentState.markers,
          newMarker: { x: 0, y: 0, body: "" },
          inputRequired: false,
        };
      });
    });
  };

  updateNewMarkerPosition = (position) => {
    this.setState(function (currentState) {
      return {
        newMarker: { ...currentState.newToken, x: position.x, y: position.y },
        inputRequired: true,
      };
    });
  };

  updateNewMarkerContent = (text, cb) => {
    this.setState(function (currentState) {
      currentState.newMarker.unix = Math.floor(Date.now() / 1000);
      return {
        newMarker: { ...currentState.newMarker, body: text },
      };
    }, cb);
  };

  render() {
    return (
      <div className="App">
        <Leaflet />
        {/* {this.state.inputRequired === true ? (
          <Input
            updateNewMarkerContent={this.updateNewMarkerContent}
            updateMarkers={this.updateMarkers}
            newMarker={this.state.newMarker}
          />
        ) : null}
        <Map
          class="board"
          updateNewMarkerPosition={this.updateNewMarkerPosition}
        />

        {this.state.markers.map((marker) => {
          return <Marker marker={marker} />;
        })} */}
      </div>
    );
  }
}

export default App;
