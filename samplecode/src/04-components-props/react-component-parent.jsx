import React from "react";
import ReactComponentChild from "./react-component-child";

export default function ReactComponentParent() {
  return (
    <div>
      <ReactComponentChild name="Alex"/>
      <ReactComponentChild name="Bobby"/>
    </div>
  )
}