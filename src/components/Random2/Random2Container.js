import React from "react";

class Random2Container extends React.Component {
  state = {};

  handleClick = async e => {
    const {
      default: AsyncPresentational
    } = await import("../AsyncPresentational");
    this.setState({
      AsyncPresentational
    });
  };
  render() {
    const { AsyncPresentational } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>
          Click me for a dynamic import of the same component
        </button>
        {AsyncPresentational && <AsyncPresentational />}
      </div>
    );
  }
}

export default Random2Container;
