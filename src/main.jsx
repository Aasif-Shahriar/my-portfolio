import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router";
import ThemeProvider from "./provider/theme-provider/ThemeProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />,
    </ThemeProvider>
  </StrictMode>
);
