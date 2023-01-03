import React from "react";

export default function JsxAttribute() {
  const attr = {
    name: "sample",
  };
  return (
    <div>
      <p className="sample">sample element</p>
      <p className={attr.name}>sample element</p>
    </div>
  );
}