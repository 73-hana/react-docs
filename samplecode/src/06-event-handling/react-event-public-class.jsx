class ReactEventPublicClass extends React.Component {
  handleClick = () => {
    console.log("This is:", this);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Click Me
      </button>
    )
  }
}

export default ReactEventPublicClass;