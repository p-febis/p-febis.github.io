import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { Layout } from "@/components/Layout";

const LandingPage = React.lazy(
  () => import("./features/LandingPage/components/LandingPage"),
);
const ProjectsPage = React.lazy(
  () => import("./features/ProjectsPage/components/ProjectsPage"),
);
const AboutPage = React.lazy(
  () => import("./features/AboutPage/components/AboutPage"),
);
const BlogPage = React.lazy(
  () => import("./features/BlogPage/components/BlogPage"),
);

const router = createBrowserRouter([
  {
    path: "",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: LandingPage,
      },
      {
        path: "/projects",
        Component: ProjectsPage,
      },
      {
        path: "/blog",
        Component: BlogPage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
