import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PostListdata from "./components/PostListdata.jsx";
import Createpost from "./components/Createpost.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostListdata /> },
      { path: "/create-post", element: <Createpost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
