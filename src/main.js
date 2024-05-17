import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const AppLayout = () => {
  return <h1 className="text-4xl font-bold font-signature">Hai I am React</h1>;
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
