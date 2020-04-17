import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handeInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem !== "") {
      const newItems = [...this.state.items, newItems];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };
  render() {
    return (
      <div>
        <header className="App">
          <form id="to-do-form" onSubmit="this.addItem">
            <input
              type="text"
              placeholder="Enter you Todo"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
}
