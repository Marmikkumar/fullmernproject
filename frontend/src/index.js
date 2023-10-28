import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import First from "./first";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <First />
  </StrictMode>
);
