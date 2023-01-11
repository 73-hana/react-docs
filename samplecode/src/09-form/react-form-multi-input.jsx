import React from "react";
import { useState } from "react";

export default function ReactFormMultiInput() {
  const [value, setValue] = useState({
    isGoing: true,
    numberOfGuests: 2,
  });

  function handleInputChange(event) {
    const target = event.target;
    const data = event.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setValue({
      [name]: data,
    })
  }

  return (
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={value.isGoing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={value.numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
    </form>
  )
}