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
import ReactStateLocalState from "./05-state-lifecycle/React-state-local-state";
import ReactStateMountUnmount from "./05-state-lifecycle/react-state-mount-unmount";
import ReactEvent from "./06-event-handling/react-event";
import ReactEventClassComponent from "./06-event-handling/react-event-class-component";
import ReactConditionalRendering from "./07-conditional-rendering/react-conditional-rendering";
import ReactConditionalRenderingVariable from "./07-conditional-rendering/react-conditional-rendering-variable";
import ReactConditionalRenderingUsingExpression from "./07-conditional-rendering/react-conditional-rendering-using-expression";
import ReactConditionalTernaryOperatorRendering from "./07-conditional-rendering/react-conditional-ternary-operator-rendering";
import ReactListKeysMap from "./08-list-keys/react-list-keys-map";
import ReactFormControlledComponent from "./09-form/react-form-controlled-component";
import ReactFormTextarea from "./09-form/react-form-textarea";
import ReactFormSelect from "./09-form/react-form-select";
import ReactFormMultiInput from "./09-form/react-form-multi-input";
import ReactCompositionInheritanceChildren from "./11-composition-inheritance/react-composition-inheritance-children";
import ReactCompositionInheritanceHandmadeChildren from "./11-composition-inheritance/react-composition-inheritance-handmade-children";
import Hooks from "./Hooks";

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
      <p>05 State and Lifecycle</p>
      <ReactStateLocalState />
      <ReactStateMountUnmount />
      <p>06 event</p>
      <ReactEvent/>
      <ReactEventClassComponent />
      <p>07 Conditional Rendering</p>
      <ReactConditionalRendering />
      <ReactConditionalRenderingVariable />
      <ReactConditionalRenderingUsingExpression unreadMessages={["Hi"]} />
      <ReactConditionalTernaryOperatorRendering />
      <p>08 List Keys</p>
      <ReactListKeysMap />
      <p>09 Form</p>
      <ReactFormControlledComponent />
      <ReactFormTextarea />
      <ReactFormSelect />
      <ReactFormMultiInput />
      <p>11 composition and inheritance</p>
      <ReactCompositionInheritanceChildren>sample</ReactCompositionInheritanceChildren>
      <ReactCompositionInheritanceHandmadeChildren />
      <hr />
      <Hooks/>
    </>
  );
}