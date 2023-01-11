import React from "react";
import { useState } from "react";

export default function ReactFormTextarea() {
  const [value, setValue] = useState("Default text");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("An essay was submitted: " + value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}