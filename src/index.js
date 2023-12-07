import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <br />
      <a
        href="https://github.com/rdhande/weather-app-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with Love
      </a>
    </div>
  </StrictMode>
);
