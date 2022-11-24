import React from "react";

class ComponentProps02 extends React.Component {
  render() {
    return (
      <>
        <p>Good evening, {this.props.name}</p>
      </>
    );
  }
}

export default ComponentProps02;