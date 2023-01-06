import React from "react";
import "./App.css";

import HelloWorld from "./01-hello-world/react-hello-world";
import CurlyBracket from "./02-jsx/react-jsx-curlybracket";
import JsxAsExpression from "./02-jsx/react-jsx-as-expressions";
import JsxAttribute from "./02-jsx/react-jsx-attribute";
import ReactComponentFunctionComponent from "./04-components-props/react-component-function-component";

export default function App() {
  return (
    <>
      <p>01 Hello World</p>
      <HelloWorld />
      <p>02 jsx</p>
      <CurlyBracket />
      <JsxAsExpression />
      <JsxAttribute />
      <p>04 Components</p>
      <ReactComponentFunctionComponent name="hana"/>
    </>
  );
}