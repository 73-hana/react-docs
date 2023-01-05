import React from "react";
import { ReactDOM } from "react";

const rootDOMNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootDOMNode);
const element = <h1>Hello, world</h1>;
root.render(element);