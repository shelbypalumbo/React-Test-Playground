import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

//Single page app
//What to render, Where to render it
ReactDOM.render(
  // <React.StrictMode>
  <App appTitle="Person Manager" />,
  // <App2 />,
  // </React.StrictMode>
  document.getElementById("root")
);

//Render person componenet in the provided div #p1
// ReactDOM.render(<Person name="emma" age="26" />, document.querySelector("#p1"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
