import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import RouterApp from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RouterApp />
  </BrowserRouter>
);
