import React from "react";

class ReactStateMountUnmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <p>It is { this.state.date.toLocaleTimeString() }.</p>
    );
  }
}

export default ReactStateMountUnmount;