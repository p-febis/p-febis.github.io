import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createHashRouter, Link } from "react-router";
import { Layout } from "@/components/Layout";

const LandingPage = React.lazy(
  () => import("./features/LandingPage/components/LandingPage"),
);

const ErrorMessage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <p className="text-3xl text-red-500">An error occured!</p>
      <Link to="/" className="underline">
        Go Home
      </Link>
    </div>
  );
};

const ProjectsPage = React.lazy(
  () => import("./features/ProjectsPage/components/ProjectsPage"),
);
const AboutPage = React.lazy(
  () => import("./features/AboutPage/components/AboutPage"),
);
const BlogPage = React.lazy(
  () => import("./features/BlogPage/components/BlogPage"),
);
const BlogDisplayPage = React.lazy(
  () => import("./features/BlogPage/components/BlogDisplayPage"),
);

const router = createHashRouter([
  {
    path: "",
    Component: Layout,
    errorElement: <ErrorMessage />,
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
        path: "/blog/:slug",
        Component: BlogDisplayPage,
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
