import React from "react";
import Random1 from "./Random1";
class RandomContainer extends React.Component {
  state = {
    clicked: false
  };
  handleClick = async e => {
    const {
      default: AsyncPresentational
    } = await import("../AsyncPresentational");
    this.setState(prevState => ({
      clicked: !prevState.clicked,
      AsyncPresentational
    }));
  };
  render() {
    const { clicked, AsyncPresentational } = this.state;
    return (
      <div>
        <Random1 />
        <button onClick={this.handleClick}>
          Click me for a dynamic import
        </button>
        {clicked && <AsyncPresentational />}
      </div>
    );
  }
}

export default RandomContainer;
