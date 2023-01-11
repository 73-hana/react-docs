import React from "react";
import { useState } from "react";

export default function ReactFormControlledComponent() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("A name was submitted: " + value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange}/>
      </label>
      <input type="submit" value="submit" />
    </form>
  )
}