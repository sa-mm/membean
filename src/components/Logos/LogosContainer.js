import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";

import { imagesStateChange, clickStateChange } from "./logosStateChanges";

class LogosContainer extends React.Component {
  state = {
    toggled: { id: null, displayHex: false },
    images: [],
    imagesCount: 0
  };

  componentWillMount() {
    this.setState(imagesStateChange);
  }

  handleClick = id => event => {
    this.setState(clickStateChange(id));
  };

  render() {
    const { images, toggled } = this.state;

    return (
      <React.Fragment>
        {images.map(({ svg, hex, id }) => (
          <div key={id} onClick={this.handleClick(id)}>
            {toggled.id === id && toggled.displayHex ? (
              <div
                style={{
                  width: "224px",
                  textAlign: "center"
                }}
              >
                {hex}
              </div>
            ) : (
              <Logo {...{ hex, svg }} />
            )}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

LogosContainer.propTypes = {
  images: PropTypes.array.isRequired
};

export default LogosContainer;
