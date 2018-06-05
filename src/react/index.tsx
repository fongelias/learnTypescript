import React from "react";
import ReactDOM from "react-dom";

import { Hello } from "./hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);
