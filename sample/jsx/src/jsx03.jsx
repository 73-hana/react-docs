import React from "react";
import ReactDOM from "react-dom";

const attrObj = {
  className: "sapmleImage",
  src: "sample/image/xxx.png",
};

const root = ReactDOM.createRoot(document.getElementById("jsx03"));
root.render(<img className={ attrObj.className } src={ attrObj.src } alt="sample image" />);