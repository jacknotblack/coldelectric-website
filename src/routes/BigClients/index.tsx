import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BigClients } from "./screens/BigClients";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BigClients />
  </StrictMode>,
);
