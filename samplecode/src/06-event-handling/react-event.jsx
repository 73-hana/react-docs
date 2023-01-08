import React from "react";

export default function ReactEvent() {
  function handleSubmit(e) {
    e.preventDefault();
    window.alert("You clicked submit.");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  )
}