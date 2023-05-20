import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement("div", { id: "heading" }, "Namaste React 🚀");

//React Functional component
let title = <h3>Yolo</h3>;
let Title = () => {
  return <h1 id="heading">This is a heading</h1>;
};
let HeadingComponent = () => {
  return (
    <h1>
      {title}
      <Title />
      From Functional Component
    </h1>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
