import React from "react";

class Flock extends React.Component {
  componentDidMount() {
    const { url, birdScripts, updateBirdScripts } = this.props;
    if (birdScripts === false) {
      this.mountScript(`${url}/three.min.js`, "three");
      this.mountScript(`${url}/bird.js`, "bird");
      this.mountScript(`${url}/boid.js`, "boid");
      this.mountScript(`${url}/setup.js`, "setup");
      updateBirdScripts();
    } else {
      this.mountScript(`${url}/restart.js`, "animation");
    }
  }

  mountScript = (path, id) => {
    const script = document.createElement("script");
    script.src = path;
    script.async = false;
    script.id = id;

    if (this.props.parent !== undefined) {
      const parent = document.getElementById(this.props.parent);
      parent.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
  };

  render() {
    return <></>;
  }
}

export default Flock;
