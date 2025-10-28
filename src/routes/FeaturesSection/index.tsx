import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FeaturesSection } from "./screens/FeaturesSection";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FeaturesSection />
  </StrictMode>,
);
