import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const AppLayout = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);

// , { createRoot }
