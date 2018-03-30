import React from "react";
import { split, join } from "lodash";

const Random1 = props => {
  const arr = split("Testing lodash from Random1", " ");
  return <div>{join(arr)}</div>;
};

export default Random1;
