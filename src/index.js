import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import TranslationProvider from "./services/NI_23";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TranslationProvider>
    <App />
  </TranslationProvider>
);
