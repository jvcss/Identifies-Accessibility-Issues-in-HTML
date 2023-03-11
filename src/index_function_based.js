import React from "react";
import ReactDOM from "react-dom";

import a11yChecker from "a11y-checker";

function A11yChecker() {
  React.useEffect(() => {
    a11yChecker();
  }, []);

  return (
    <div>
      <h1>A11y Checker </h1>
      <h1>Identifies accessibility issues in HTML markup.</h1>
      <h2>Open console to see warnings</h2>
      <h2>Open console to see warnings</h2>
      <button id="empty-btn" aria-label="VALUE" />
    </div>
  );
}

ReactDOM.render(<A11yChecker />, document.getElementById("root"));
