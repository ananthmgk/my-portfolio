import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const AppLayout = () => {
  return <h1>Hai I am React</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
