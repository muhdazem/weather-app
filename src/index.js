const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./App");
import "./index.css";

let target = document.querySelector("#root");

ReactDOM.render(<App />, target);
