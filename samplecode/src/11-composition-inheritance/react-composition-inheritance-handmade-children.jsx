import React from "react";

function HandMadeDiv(props) {
  return (
    <div>
      <div>
        {props.left}
      </div>
      <div>
        {props.right}
      </div>
    </div>
  )
}

export default function ReactCompositionInheritanceHandmadeChildren() {
  return (
    <div>
      <HandMadeDiv left={<span>sample left</span>} />
      <HandMadeDiv right={<span>sample right</span>} />
    </div>
  );
}