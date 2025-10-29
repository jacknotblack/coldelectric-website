import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IndustriesWePower } from "./screens/IndustriesWePower";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <IndustriesWePower />
  </StrictMode>,
);
