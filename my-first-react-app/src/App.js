import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Overview } from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [] };
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
  }
  add() {
    const task = document.querySelector("input").value;

    this.setState({
      tasks: this.state.tasks.concat({
        text: task,
        id: uniqid(),
      }),
      task: {
        text: "",
        id: uniqid(),
      },
    });
  }
  del(movieName) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== movieName),
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" placeholder="enter name" />
          <button onClick={this.add}>add</button>
          <Overview tasks={this.state.tasks} del={this.del} />
        </header>
      </div>
    );
  }
}

export default App;
