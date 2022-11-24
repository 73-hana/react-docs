import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <>
      <h1>Hello World!</h1>
      <p>It is { new Date().toLocaleTimeString() }</p>
    </>
  );
  root.render(element);
}

setInterval(tick, 1000);