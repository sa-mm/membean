import React from "react";
import ReactDOM from "react-dom";
import LogosContainer from "../components/Logos/LogosContainer";

// show us some tests for your solution!
const mockProps = {
  images: []
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LogosContainer {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
