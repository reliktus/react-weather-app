import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends Component {
  state = {
    value: ""
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        Aplikacja pogodowa
        <Form value={this.state.value} change={this.handleInputChange}/>
        <Result />
      </div>
    );
  }
}

export default App;
