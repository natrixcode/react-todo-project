import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router } from "react-router-dom";

//component
import TodoContainer from "./functionBased/components/TodoContainer";

//stylesheet
import "./functionBased/App.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
 