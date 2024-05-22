import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, NoPage, StoriesList } from "./components/composure";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NoPage />,
  },
  {
    path: "/story/:username",
    element: <StoriesList />,
    errorElement: <NoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
