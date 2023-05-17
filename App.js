import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is a h1 tag1"),
    React.createElement("h2", {}, "This is a h2 tag2"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from react"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
