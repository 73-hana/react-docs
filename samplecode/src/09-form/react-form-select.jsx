import React from "react";
import { useState } from "react";

export default function ReactFormSelect() {
  const [value, setValue] = useState();

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert("Your favorite flavor is: " + value);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={value} onChange={handleChange}>
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
            <option value="Coconut">Coconut</option>
            <option value="Mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}