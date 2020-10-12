import React from "react";
import ReactDOM from "react-dom";

import StoreProvider from "./redux/StoreProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  rootElement
);
