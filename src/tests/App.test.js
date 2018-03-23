import React from "react";
import ReactDOM from "react-dom";
import { App } from "../App";

// show us some tests for your solution!
const mockProps = {
  callApi: jest.fn()
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders with all props without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App {...mockProps} apiResponse={{ images: [] }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
