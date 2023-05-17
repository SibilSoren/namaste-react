import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement("div", { id: "heading" }, "Namaste React 🚀");
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
