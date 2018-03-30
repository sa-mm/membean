import React from "react";
// import { split, join } from "lodash";
import { max } from "d3";

const AsyncPresentational = props => {
  // const arr = split("Testing lodash from Random2", " ");
  const maxNum = max([1, 2, 3]);
  // return <div>{join(arr)}</div>;
  return <div>{maxNum}</div>;
};

export default AsyncPresentational;
