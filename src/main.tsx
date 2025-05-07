import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { LandingPage } from "./features/LandingPage/components/LandingPage";

const ComingSoon = React.lazy(() => import("@/components/ComingSoon.tsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/projects",
    element: <ComingSoon />,
  },
  {
    path: "/blog",
    element: <ComingSoon />,
  },
  {
    path: "/about",
    element: <ComingSoon />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
