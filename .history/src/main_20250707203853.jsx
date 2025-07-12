import React, { StrictMode } from "react"; // 👈 IMPORTANTE
import { createRoot } from "react-dom/client";
import App from "./App"; // 👈 IMPORTANTE
import "./index.css"; // (Opcional si tienes estilos)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
