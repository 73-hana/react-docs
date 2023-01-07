import React from "react";
import "./App.css";

import HelloWorld from "./01-hello-world/react-hello-world";
import CurlyBracket from "./02-jsx/react-jsx-curlybracket";
import JsxAsExpression from "./02-jsx/react-jsx-as-expressions";
import JsxAttribute from "./02-jsx/react-jsx-attribute";
import ReactComponentFunctionComponent from "./04-components-props/react-component-function-component";
import ReactComponentClassComponent from "./04-components-props/react-component-class-component";
import ReactComponentProps from "./04-components-props/react-component-props";
import ReactComponentParent from "./04-components-props/react-component-parent";

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
      <ReactComponentClassComponent name="hana"/>
      <ReactComponentProps name="hana"/>
      <ReactComponentParent/>
    </>
  );
}