import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<index />, document.getElementById("root"));
