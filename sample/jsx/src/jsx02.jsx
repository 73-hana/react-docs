import React from "react";
import ReactDOM from "react-dom";

const user = "Jonh Doe";

function getGreeting(user) {
  if (user) {
    return <p>Hello { user }</p>;
  } else {
    return <p>Who are you?</p>;
  }
}

const booksCart = [
  "book1 - basic",
  "book2 - advanced",
  "book3 - superhard",
]

function listupBooks(arr) {
  let bookList = [];
  for (let i = 0; i < arr.length; i++) {
    bookList.push(<li>{ arr[i] }</li>);
  }
  return <ul>{ bookList }</ul>

}

const output = (
  <>
    <div>{ getGreeting(user) }</div>
    <div>{ listupBooks(booksCart) }</div>
  </>
)

const root = ReactDOM.createRoot(document.getElementById("jsx02"));
root.render(output);