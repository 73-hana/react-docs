import React from "react";
import { useState } from "react";

export default function ReactConditionalRenderingVariable() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let button = null;

  function handleLoginClick() {
    setIsLoggedIn(true);
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }

  if (isLoggedIn) {
    button = <button onClick={handleLogoutClick}>Log out</button>
  } else {
    button = <button onClick={handleLoginClick}>Log in</button>
  }

  return (
    <div>
      {button}
    </div>
  )
}