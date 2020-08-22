import React from "react";
import "./Map.css";

const mousePos = { x: 0, y: 0 };

class Map extends React.Component {
  state = {
    width: 1920,
    height: 1080,
  };

  componentDidMount() {
    const context = this.refs.canvas.getContext("2d");
    context.canvas.addEventListener("mousemove", (event) => {
      mousePos.x = event.clientX;
      mousePos.y = event.clientY;
    });
    context.canvas.addEventListener("mousedown", (event) => {
      this.props.updateNewMarkerPosition({ x: mousePos.x, y: mousePos.y });
    });
  }

  render() {
    return (
      <canvas
        ref="canvas"
        width={this.state.width}
        height={this.state.height}
      ></canvas>
    );
  }
}

export default Map;
