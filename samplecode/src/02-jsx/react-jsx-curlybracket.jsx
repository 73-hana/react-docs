import React from "react";
import { ReactDOM } from "react";

const user = {
  firstName: "Don",
  lastName: "Joe",
};

function returnAge(age) {
  return `I am ${age} years old.`;
}

export default function CurlyBracket() {
  return (
    <div>
      <p>My name is {user.firstName + " " + user.lastName}.</p>
      <p>{returnAge(34)}</p>
    </div>
  );
}