import { render } from "@testing-library/react";
import React, { useState } from "react";

class ClCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      value: "Привет",
    };
  }
  increment = () => {
    this.setState({ likes: this.state.likes + 1 });
  };
  decrement = () => {
    this.setState({ likes: this.state.likes - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <h1>{this.state.likes}</h1>
        <input
          type="text"
          onChange={(event) => this.setValue(event.target.value)}
          value={this.state.value}
        ></input>
        <button onClick={this.increment}>Увеличить</button>
        <button onClick={this.decrement}>Увеличить</button>
      </div>
    );
  }
}

export default ClCounter;
