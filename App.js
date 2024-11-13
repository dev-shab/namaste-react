import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="head">Namaste React using JSX</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 id="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeadingComponent />);
