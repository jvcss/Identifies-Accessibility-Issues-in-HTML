# Easy way to fix accessibility issues in HTML markup

*Created with CodeSandbox*

## How it works
```js
import a11yChecker from "a11y-checker";

function my_root_component(){
  React.useEffect(() => {
    a11yChecker(); //verifier
  }, []);

  return (
    <div>
      <h1>A11y Checker </h1>
      <h1>Identifies accessibility issues in HTML markup.</h1>
      <h2>Open console to see warnings</h2>
      <button id="empty-btn" />
    </div>
  );
}
```
