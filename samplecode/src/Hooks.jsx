import React from "react";
import "./Hooks.css"
import Hooks02StateHook from "./hooks-02-overview/hooks-02-state-hook";
import Hooks02EffectHook from "./hooks-02-overview/hooks-02-effect-hook";

export default function Hooks() {
  return (
    <div className="hooks">
      <h3>02 Overview</h3>
      <Hooks02StateHook/>
      <Hooks02EffectHook/>
    </div>
  )
}