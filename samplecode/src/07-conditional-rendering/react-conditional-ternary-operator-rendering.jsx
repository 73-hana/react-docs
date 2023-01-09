import React from "react";
import { useState } from "react";

export default function ReactConditionalTernaryOperatorRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  return (
    <div>
      <p>The user is <b>{isLoggedIn ? "Currently" : "not"}</b> logged in.</p>
    </div>
  )
}