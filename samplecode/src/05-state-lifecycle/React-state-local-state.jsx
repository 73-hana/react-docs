import React from "react";

class ReactStateLocalState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <p>{ this.state.date.toLocaleTimeString() }</p>
    )
  }
}

export default ReactStateLocalState;