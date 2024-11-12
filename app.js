const heading1 = React.createElement(
  "h1",
  {
    className: "heading",
  },
  "Hello World from React!"
);
const heading2 = React.createElement(
  "h1",
  {
    className: "heading",
  },
  "Don't worry, be Happy!"
);
const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
