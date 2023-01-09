import React from "react";

export default function ReactConditionalRendering(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <p>Hello Guest!</p>
  } else {
    return <p>Hello User!</p>
  }
}