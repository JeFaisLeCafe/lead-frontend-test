import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Orders from "./pages/orders";
import Tracker from "./pages/tracker";
import ErrorPage from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Orders />,
    errorElement: <ErrorPage />
  },
  { path: "/orders", element: <Orders /> },
  { path: "/tracker/:tracking_number", element: <Tracker /> }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
