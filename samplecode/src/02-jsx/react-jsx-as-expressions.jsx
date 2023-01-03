import React from "react";

const isTrue = true;

export default function JsxAsExpression() {
    if (isTrue) {
      return <div><p>Yes, this is true.</p></div>;
    } else {
      return <div><p>Nope, this isn't true.</p></div>;
  }

}