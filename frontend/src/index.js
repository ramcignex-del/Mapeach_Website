import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import './Theme.css';

const container = document.getElementById("root");

if (!container) {
  throw new Error("❌ Root element not found. Check <div id='root'></div> in index.html");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
