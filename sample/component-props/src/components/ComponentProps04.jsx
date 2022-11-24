import React from "react";

function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

function ComponentProps04() {
  return (
    <div>
      <Welcome name="Nanami" />
      <Welcome name="Saa" />
      <Welcome name="John" />
    </div>
  );
}

export default ComponentProps04;