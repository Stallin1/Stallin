import React from "react";
import ReactDOM from "react-dom";

import App from "./app.js";
import ShopRouting from "./shop-routing.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ShopRouting />
  </React.StrictMode>,
  document.getElementById("root")
);
