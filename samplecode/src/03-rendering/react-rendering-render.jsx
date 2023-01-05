import React from "react";
import { ReactDOM } from "react";

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

function tick() {
  const element = (
    <p>It is { new Date().toLocaleDateString() }</p>
  );
  root.render(element);
}

setInterval(tick, 1000);