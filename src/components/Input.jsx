import React from "react";
import "./Input.css";

class Input extends React.Component {
  state = {
    text: "",
  };

  componentDidMount() {}

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.updateNewMarkerContent(this.state.text, () => {
      this.props.updateMarkers(this.props.newMarker);
    });

    this.setState({ text: "" });
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <form
        style={{
          top: this.props.newMarker.y - 40,
          left: this.props.newMarker.x - 100,
        }}
        onSubmit={this.handleSubmit}
      >
        <label>
          Note:
          <input
            value={this.state.text}
            onChange={this.handleChange}
            type="text"
          ></input>
        </label>
        <button>Create Marker</button>
      </form>
    );
  }
}

export default Input;
