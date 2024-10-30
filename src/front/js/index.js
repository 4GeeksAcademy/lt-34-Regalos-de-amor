//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Login from "./component/login";

//render your react application
ReactDOM.render(<Login />, document.querySelector("#app"));
