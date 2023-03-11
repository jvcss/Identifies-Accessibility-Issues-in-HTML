import React from "react";
import { render } from "react-dom";
import a11yChecker from "a11y-checker";

class A11yChecker extends React.Component {
  componentDidMount() {
    a11yChecker();
  }

  render() {
    return (
      <div>
        <h1>A11y Checker</h1>
        <h1>Identifies accessibility issues in HTML markup.</h1>
        <h2>Open console to see warnings</h2>
        <button id="empty-btn" />
      </div>
    );
  }
}

render(<A11yChecker />, document.getElementById("root"));
