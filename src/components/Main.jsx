import React from "react";
import Parallax from "react-rellax";
import "./Main.css";
import Flock from "./Flock";

class Main extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <>
        <Flock parent="container" url={url} />
        <div className="parallax-container" id="container">
          <Parallax speed={1} div>
            <img
              className="mountain-layer"
              src={`${url}/images/mountain-layer.svg`}
            />
          </Parallax>
          <Parallax speed={1.5}>
            <img
              className="castle-section"
              src={`${url}/images/castle-prime.svg`}
            />
          </Parallax>
          <Parallax speed={2.5}>
            <img
              className="forest-section"
              src={`${url}/images/forest-prime.svg`}
            />
          </Parallax>
          <Parallax speed={3.5} id="bird-layer">
            <img
              className="forest-layer-front"
              src={`${url}/images/forest-layer-front.svg`}
            />
          </Parallax>
          <Parallax speed={4}>
            <img
              className="cliff-layer"
              src={`${url}/images/cliff-layer.svg`}
            />
          </Parallax>
        </div>
        <Parallax speed={4}>
          <div className="red-section">
            <h1>
              <u>Campaign</u>
            </h1>
            <p>
              <span className="caps"></span>Morem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi varius ipsum in eros suscipit
              posuere. Sed tellus mi, accumsan sit amet metus at, rutrum
              consequat massa. Maecenas ut vestibulum mi. Nam eleifend sit amet
              ipsum sed tristique. Suspendisse tempus purus quis urna facilisis,
              a consequat magna rutrum. Phasellus id tempus leo. Aenean
              vestibulum enim et dolor cursus, sed congue sapien dictum. Aliquam
              ultrices, massa ut mattis aliquet, nisi nunc porttitor elit, nec
              laoreet magna libero at arcu. Quisque ac aliquam enim, eget
              bibendum justo. Sed sit amet vestibulum ligula, sed consequat
              turpis.
            </p>
          </div>
        </Parallax>
      </>
    );
  }
}

export default Main;
