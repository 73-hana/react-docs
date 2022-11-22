import React from "react";
import ReactDOM from "react-dom";

const nickName = "Nanami-hana";

const fullName = {
  firstName: "John",
  lastName: "Doe",
}
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const elements = (
  <>
    <p>{ nickName }</p>
    <p>{ formatName(fullName) }</p>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("jsx01"));
root.render(elements);